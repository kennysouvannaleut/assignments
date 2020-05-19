const router = require('express').Router();
const issueController = require('../controllers/issue.js');
const validateToken = require('../utils.js').validateToken;

router.post('/create', validateToken, issueController.createIssue);
router.get('/all', validateToken, issueController.allIssues);
router.get('/:issueId/details', validateToken, issueController.issueDetails);
router.get('/current-user', validateToken, issueController.currentUser);
router.get('/user/:username', validateToken, issueController.userIssues);
router.put('/:issueId/upvote', validateToken, issueController.upvoteIssue);
router.put('/:issueId/downvote', validateToken, issueController.downvoteIssue);
router.put('/:issueId/update', validateToken, issueController.updateIssue);
router.delete('/:issueId/delete', validateToken, issueController.deleteIssue);

module.exports = router;
