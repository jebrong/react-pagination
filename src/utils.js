export const createPages = (followersGroup, pageNumber) => {
  let followersPerPage = 6;
  let currentPage = pageNumber;
  let indexOfLastFollower = followersPerPage * currentPage;
  let indexOfFirstFollower = indexOfLastFollower - followersPerPage;

  let currentPageFollowers = followersGroup.slice(
    indexOfFirstFollower,
    indexOfLastFollower
  );

  return currentPageFollowers;
};
