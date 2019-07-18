const { Router } = require('express');
const router = Router();

router.route('/')
  .get((req, res) => res.send('Notes Router'));

module.exports = router;