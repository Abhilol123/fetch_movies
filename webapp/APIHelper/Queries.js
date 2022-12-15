const PGUtils = require("./PGUtils");

const Queries = {};

/**
 * Query to get user by id.
 * @param {number} userId
 * @returns {array}
 */
Queries.getMovieById = async (id) => {
	let getMovieByIdQueryText = `
		SELECT id, name AS title, image_url AS poster_path, language, overview, TO_CHAR(release_date, 'dd/mm/yyyy') AS release_date
		FROM public.movies
		WHERE id = ${id}
	;`;

	let err, getMovieByIdResult = await PGUtils.readQuery({ text: getMovieByIdQueryText });
	if (err) {
		console.error("Error: Queries.getMovieById failed with error: ", err);
		return;
	}
	return getMovieByIdResult;
}

module.exports = Queries;
