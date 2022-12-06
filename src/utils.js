export const createPages = (followersGroup, pageNumber, perPage) => {
  let followersPerPage = perPage;
  let currentPage = pageNumber;
  let indexOfLastFollower = followersPerPage * currentPage;
  let indexOfFirstFollower = indexOfLastFollower - followersPerPage;

  let currentPageFollowers = followersGroup.slice(
    indexOfFirstFollower,
    indexOfLastFollower
  );

  return currentPageFollowers;
};
