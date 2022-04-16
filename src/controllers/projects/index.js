'use strict'

import deleteProject from "./delete-project-controller.js"
import getProjectById from "./get-project-by-id-controller.js"
import getProjects from "./get-projects-controller.js"
import registerProject from "./register-project-controller.js"
import editProject from "./edit-project-controller.js"

const projectController = {
    deleteProject,
    getProjectById,
    getProjects,
    registerProject,
    editProject,
}

export default projectController