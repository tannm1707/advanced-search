export const generateApiPath = (path: string) => {
  return `/${process.env.API_BASE_PATH}/${process.env.API_VERSION_PREFIX}/${path}`;
};