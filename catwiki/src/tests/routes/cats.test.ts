import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../index';
import { seedFavouriteBreeds } from '../../utils/seeds';
import FavouriteBreed from '../../models/favouriteBreed';

chai.use(chaiHttp);

const expect = chai.expect;
const should = chai.should;

describe('Search a breed by a query text', function () {
  let testApp: ChaiHttp.Agent;

  beforeEach(function () {
    testApp = chai.request(app);
  });

  it('should throw an error when search Term is an empty string', function (done) {
    testApp
      .get('/api/breeds/search')
      .query({ searchTerm: '' })
      .end(function (err, res) {
        expect(res).to.be.json;
        expect(res).to.have.status(400);
        done();
      });
  });

  it('should return breed results when a search Term is passed', function (done) {
    testApp
      .get('/api/breeds/search')
      .query({ searchTerm: 'american' })
      .end(function (err, res) {
        expect(res).to.be.json;
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Get the top 10 most searched breeds', function () {
  let testApp: ChaiHttp.Agent;

  beforeEach(async function () {
    testApp = chai.request(app);
    await seedFavouriteBreeds(true);
  });

  it('should return 10 breeds when server is launched with seeded data', async function () {
    testApp.get('/api/breeds/popular').end(function (err, res) {
      expect(res).to.be.json;
      expect(res).to.have.status(200);
      expect(res.body.length).to.be.equal(10);
    });
  });
});

describe('Post a popular search breed', function () {
  let testApp: ChaiHttp.Agent;

  beforeEach(async function () {
    testApp = chai.request(app);
    await seedFavouriteBreeds(true);
  });

  it('should increase the searchCount of the breed when a breed is marked as favoutire', async function () {
    const testBreed: any = await FavouriteBreed.findOne({});
    const initialCount = testBreed.searchCount;
    const testBreedId = testBreed.id;

    if (!testBreed) {
      throw new Error('No breed found');
    }

    const res = await testApp.post('/api/breeds/popular').send({
      breedId: testBreed.breedId,
      name: testBreed.name,
      description: testBreed.description,
    });

    const breed: any = await FavouriteBreed.findOne({ _id: testBreedId });
    if (!testBreed) {
      throw new Error('No breed found');
    }

    expect(breed.searchCount).to.equal(initialCount + 1);
  });

  it('should throw an error when breedId is not passed', function (done) {
    testApp
      .post('/api/breeds/popular')
      .send({
        name: 'Test name',
        description: 'Test description',
      })
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('Get the images for the breed', function () {
  let testApp: ChaiHttp.Agent;

  beforeEach(async function () {
    testApp = chai.request(app);
    await seedFavouriteBreeds(true);
  });

  it('should return an error when breedId is not passed as query param', function (done) {
    testApp.get('/api/breeds/images').end(function (err, res) {
      expect(res).to.be.json;
      expect(res).to.have.status(400);
      done();
    });
  });

  it('should return an array response when breedId is passed in query param', function (done) {
    testApp
      .get('/api/breeds/images')
      .query({ breedId: 'abys' })
      .end(function (err, res) {
        expect(res).to.be.json;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
      });
  });
});
