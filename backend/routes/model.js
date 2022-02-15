const express = require('express');
const router = express.Router();
const Model = require('../models/model');

router
	.get('/all', (req, res) => {
		Model.find((err, models) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(models);
			}
		});
	})
	.get('/filter', (req, res) => {
		Model.find(req.query, (err, models) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(models);
			}
		});
	})
	.get('/search', (req, res) => {
		Model.find(
			{
				$or: [
					{ firstName: { $regex: req.query.search } },
					{ lastName: { $regex: req.query.search } },
					{ profession: { $regex: req.query.search } },
				],
			},
			(err, models) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.json(models);
				}
			},
		);
	})
	.post('/', (req, res) => {
		Model.create(req.body, (err, model) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(model);
			}
		});
	});

module.exports = router;
