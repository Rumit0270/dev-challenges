import * as admin from 'firebase-admin';
import { Request, Response } from 'express';

import db from '../utils/db';

const imageUrlRegex = RegExp(
  '^(https://images.unsplash.com/photo-)([0-9])*-([0-9a-zA-Z])*?.*'
);

export const getImages = async (req: Request, res: Response) => {
  try {
    let data: any[] = [];
    let querySnapshot = await db
      .collection('images')
      .orderBy('timestamp', 'desc')
      .get();

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const postImage = async (req: Request, res: Response) => {
  try {
    const { label, imageUrl } = req.body;
    if (!label || !imageUrl || !imageUrlRegex.test(imageUrl)) {
      return res.status(400).json({
        error: 'Invalid request',
      });
    }

    let docRef = await db.collection('images').add({
      label,
      imageUrl,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    let newDoc = await docRef.get();

    return res.status(200).json({ id: newDoc.id, ...newDoc.data() });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        error: 'Invalid request',
      });
    }

    await db.collection('images').doc(id).delete();

    return res.status(200).json({
      id: id,
      message: 'Document deleted successfully',
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
