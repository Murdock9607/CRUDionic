module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0cf321f87d64bbc83e99a8bb9ce86ae7'),
  },
});
