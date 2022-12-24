import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Follower } from './GitHubProfile';

export const useGetGitHubProfile = (
  user: string,
): UseQueryResult<Follower[], Error> => {
  return useQuery(
    ['repoData'],
    () =>
      fetch(`https://api.github.com/users/${user}/followers`).then(res =>
        res.json(),
      ),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  );
};
