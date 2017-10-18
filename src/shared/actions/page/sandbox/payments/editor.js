/**
 * Actions related to the UI state of payment editor page.
 */

import { createActions } from 'redux-actions';

/**
 * Payload creator for the action that selects the specified project.
 * @param {String} projectId
 * @return {String} Action payload.
 */
function selectProject(projectId) {
  return projectId;
}

export default createActions({
  PAGE: {
    SANDBOX: {
      PAYMENTS: {
        EDITOR: {
          SELECT_PROJECT: selectProject,
        },
      },
    },
  },
});
