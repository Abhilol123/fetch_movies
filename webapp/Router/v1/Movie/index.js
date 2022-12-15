const Express = require("express");
const Queries = require("APIhelper/Queries");

const movieRouter = Express.Router();

/**
 * Get movie details by id.
 */
movieRouter.get("/:id", async (req, res, next) => {
	try {
		if (!req.params?.id || !(/^[0-9]+$/).test(req.params.id) || !parseFloat(req.params.id)) {
			return res.status(400).send({ status: "BAD_REQUEST", errorMessage: "Please enter a valid movie id" });
		};
		let getMovieByIdResult = await Queries.getMovieById(req.params.id);
		if (!getMovieByIdResult || !Array.isArray(getMovieByIdResult)) {
			console.error("Error: Queries.getMovieById failed and did not return an array.");
			return res.status(500).send({ status: "INTERNAL_SERVER_ERROR", errorMessage: "Something went wrong. Please try again later." });
		}
		if (!getMovieByIdResult[0]) {
			return res.status(404).send({ status: "NOT_FOUND", errorMessage: "The movie you are looking for may not exist." });
		}
		return res.status(200).send({ status: "SUCCESS", movieDetails: getMovieByIdResult[0] });
	} catch (err) {
		console.error("Error: Queries.getMovieById failed with error: ", err);
		return res.status(500).send({ status: "INTERNAL_SERVER_ERROR", errorMessage: "Something went wrong. Please try again later." });
	}
});

module.exports = movieRouter;
