# Ropes Project

This repository holds the image sharing application developed in Ropes. For
information on the project workflow, refer to the
[wiki](https://sites.google.com/a/appfolio.com/eng/new-hire-resources/engineering-academy/ropes/image-sharing-project)

## Task Dependency Graph

[![Dependencies](https://raw.githubusercontent.com/AppFolioOnboarding/tasks/master/dependencies.png)](https://github.com/AppFolioOnboarding/tasks)

The dashed lines indicate a "softer" dependency: these issues can be started,
but not completed, before the "Refactor flow tests to use page objects" issue
is completed. This is because the flow tests for those subsequent issues
should be written using page objects. So for those issues, everything other
than their flow tests can be worked on before the "Refactor flow test to use
page objects" issue has been completed.
