import { fetchAllGithub } from "../../services/github";

export default async function handler (req, res) {
  const { query: { name } } = req;
  
  //SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N

  //const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
  //const queryString = 'q=' + encodeURIComponent(`${name} sort:created order:asc`);

  //q=tetris+language:assembly&sort=stars&order=desc
/*
  const response = await fetch(`https://api.github.com/search/repositories?${queryString}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  const htmlString = await response.text()
*/
  //const results = JSON.parse(htmlString);

  
  ///const results = await fetchAllGithub({ name })
  //console.log({ response })

  //const results = response;

  
  const results = {"total_count": 5,"incomplete_results":false,"items":[{"id":295558920,"node_id":"MDEwOlJlcG9zaXRvcnkyOTU1NTg5MjA=","name":"employee-information-directory-react","full_name":"palowenstein/employee-information-directory-react","private":false,"owner":{"login":"palowenstein","id":62629390,"node_id":"MDQ6VXNlcjYyNjI5Mzkw","avatar_url":"https://avatars.githubusercontent.com/u/62629390?v=4","gravatar_id":"","url":"https://api.github.com/users/palowenstein","html_url":"https://github.com/palowenstein","followers_url":"https://api.github.com/users/palowenstein/followers","following_url":"https://api.github.com/users/palowenstein/following{/other_user}","gists_url":"https://api.github.com/users/palowenstein/gists{/gist_id}","starred_url":"https://api.github.com/users/palowenstein/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/palowenstein/subscriptions","organizations_url":"https://api.github.com/users/palowenstein/orgs","repos_url":"https://api.github.com/users/palowenstein/repos","events_url":"https://api.github.com/users/palowenstein/events{/privacy}","received_events_url":"https://api.github.com/users/palowenstein/received_events","type":"User","site_admin":false},"html_url":"https://github.com/palowenstein/employee-information-directory-react","description":"Employee information register searchable by last name (full or partial), asc/desc alphabetical order. Built with React.","fork":false,"url":"https://api.github.com/repos/palowenstein/employee-information-directory-react","forks_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/forks","keys_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/keys{/key_id}","collaborators_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/teams","hooks_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/hooks","issue_events_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/issues/events{/number}","events_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/events","assignees_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/assignees{/user}","branches_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/branches{/branch}","tags_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/tags","blobs_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/git/refs{/sha}","trees_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/git/trees{/sha}","statuses_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/statuses/{sha}","languages_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/languages","stargazers_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/stargazers","contributors_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/contributors","subscribers_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/subscribers","subscription_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/subscription","commits_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/commits{/sha}","git_commits_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/git/commits{/sha}","comments_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/comments{/number}","issue_comment_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/issues/comments{/number}","contents_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/contents/{+path}","compare_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/compare/{base}...{head}","merges_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/merges","archive_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/downloads","issues_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/issues{/number}","pulls_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/pulls{/number}","milestones_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/milestones{/number}","notifications_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/labels{/name}","releases_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/releases{/id}","deployments_url":"https://api.github.com/repos/palowenstein/employee-information-directory-react/deployments","created_at":"2020-09-14T23:06:17Z","updated_at":"2021-03-12T01:15:09Z","pushed_at":"2021-03-12T01:15:11Z","git_url":"git://github.com/palowenstein/employee-information-directory-react.git","ssh_url":"git@github.com:palowenstein/employee-information-directory-react.git","clone_url":"https://github.com/palowenstein/employee-information-directory-react.git","svn_url":"https://github.com/palowenstein/employee-information-directory-react","homepage":"https://employee-info-retriever-react.herokuapp.com/","size":9022,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":{"key":"mit","name":"MIT License","spdx_id":"MIT","url":"https://api.github.com/licenses/mit","node_id":"MDc6TGljZW5zZTEz"},"allow_forking":true,"is_template":false,"topics":["antd","axios","employee-directory-consultable","jest","react"],"visibility":"public","forks":0,"open_issues":0,"watchers":0,"default_branch":"master","score":1},{"id":355623640,"node_id":"MDEwOlJlcG9zaXRvcnkzNTU2MjM2NDA=","name":"React-Employee-Directory","full_name":"nvandenberge/React-Employee-Directory","private":false,"owner":{"login":"nvandenberge","id":28630400,"node_id":"MDQ6VXNlcjI4NjMwNDAw","avatar_url":"https://avatars.githubusercontent.com/u/28630400?v=4","gravatar_id":"","url":"https://api.github.com/users/nvandenberge","html_url":"https://github.com/nvandenberge","followers_url":"https://api.github.com/users/nvandenberge/followers","following_url":"https://api.github.com/users/nvandenberge/following{/other_user}","gists_url":"https://api.github.com/users/nvandenberge/gists{/gist_id}","starred_url":"https://api.github.com/users/nvandenberge/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/nvandenberge/subscriptions","organizations_url":"https://api.github.com/users/nvandenberge/orgs","repos_url":"https://api.github.com/users/nvandenberge/repos","events_url":"https://api.github.com/users/nvandenberge/events{/privacy}","received_events_url":"https://api.github.com/users/nvandenberge/received_events","type":"User","site_admin":false},"html_url":"https://github.com/nvandenberge/React-Employee-Directory","description":"An employee directory generated using the Random User API. This directory allows users to filter for employees by last name as well as sort all employees in asc/desc order by their first name.","fork":false,"url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory","forks_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/forks","keys_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/keys{/key_id}","collaborators_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/teams","hooks_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/hooks","issue_events_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/issues/events{/number}","events_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/events","assignees_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/assignees{/user}","branches_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/branches{/branch}","tags_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/tags","blobs_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/git/refs{/sha}","trees_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/git/trees{/sha}","statuses_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/statuses/{sha}","languages_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/languages","stargazers_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/stargazers","contributors_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/contributors","subscribers_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/subscribers","subscription_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/subscription","commits_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/commits{/sha}","git_commits_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/git/commits{/sha}","comments_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/comments{/number}","issue_comment_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/issues/comments{/number}","contents_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/contents/{+path}","compare_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/compare/{base}...{head}","merges_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/merges","archive_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/downloads","issues_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/issues{/number}","pulls_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/pulls{/number}","milestones_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/milestones{/number}","notifications_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/labels{/name}","releases_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/releases{/id}","deployments_url":"https://api.github.com/repos/nvandenberge/React-Employee-Directory/deployments","created_at":"2021-04-07T17:07:50Z","updated_at":"2021-04-18T16:56:08Z","pushed_at":"2021-04-13T19:26:15Z","git_url":"git://github.com/nvandenberge/React-Employee-Directory.git","ssh_url":"git@github.com:nvandenberge/React-Employee-Directory.git","clone_url":"https://github.com/nvandenberge/React-Employee-Directory.git","svn_url":"https://github.com/nvandenberge/React-Employee-Directory","homepage":"https://nvandenberge.github.io/React-Employee-Directory/","size":1641,"stargazers_count":1,"watchers_count":1,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":true,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":{"key":"mit","name":"MIT License","spdx_id":"MIT","url":"https://api.github.com/licenses/mit","node_id":"MDc6TGljZW5zZTEz"},"allow_forking":true,"is_template":false,"topics":[],"visibility":"public","forks":0,"open_issues":0,"watchers":1,"default_branch":"main","score":1},{"id":77902033,"node_id":"MDEwOlJlcG9zaXRvcnk3NzkwMjAzMw==","name":"multiFunctionTables-","full_name":"jxw1994/multiFunctionTables-","private":false,"owner":{"login":"jxw1994","id":22948331,"node_id":"MDQ6VXNlcjIyOTQ4MzMx","avatar_url":"https://avatars.githubusercontent.com/u/22948331?v=4","gravatar_id":"","url":"https://api.github.com/users/jxw1994","html_url":"https://github.com/jxw1994","followers_url":"https://api.github.com/users/jxw1994/followers","following_url":"https://api.github.com/users/jxw1994/following{/other_user}","gists_url":"https://api.github.com/users/jxw1994/gists{/gist_id}","starred_url":"https://api.github.com/users/jxw1994/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/jxw1994/subscriptions","organizations_url":"https://api.github.com/users/jxw1994/orgs","repos_url":"https://api.github.com/users/jxw1994/repos","events_url":"https://api.github.com/users/jxw1994/events{/privacy}","received_events_url":"https://api.github.com/users/jxw1994/received_events","type":"User","site_admin":false},"html_url":"https://github.com/jxw1994/multiFunctionTables-","description":"This is a multi-function table components for react, can realize the asc and desc order arrangement, can also be filtered,","fork":false,"url":"https://api.github.com/repos/jxw1994/multiFunctionTables-","forks_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/forks","keys_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/keys{/key_id}","collaborators_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/teams","hooks_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/hooks","issue_events_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/issues/events{/number}","events_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/events","assignees_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/assignees{/user}","branches_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/branches{/branch}","tags_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/tags","blobs_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/git/refs{/sha}","trees_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/git/trees{/sha}","statuses_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/statuses/{sha}","languages_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/languages","stargazers_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/stargazers","contributors_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/contributors","subscribers_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/subscribers","subscription_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/subscription","commits_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/commits{/sha}","git_commits_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/git/commits{/sha}","comments_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/comments{/number}","issue_comment_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/issues/comments{/number}","contents_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/contents/{+path}","compare_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/compare/{base}...{head}","merges_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/merges","archive_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/downloads","issues_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/issues{/number}","pulls_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/pulls{/number}","milestones_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/milestones{/number}","notifications_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/labels{/name}","releases_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/releases{/id}","deployments_url":"https://api.github.com/repos/jxw1994/multiFunctionTables-/deployments","created_at":"2017-01-03T09:20:48Z","updated_at":"2017-01-03T09:21:00Z","pushed_at":"2017-01-03T09:20:59Z","git_url":"git://github.com/jxw1994/multiFunctionTables-.git","ssh_url":"git@github.com:jxw1994/multiFunctionTables-.git","clone_url":"https://github.com/jxw1994/multiFunctionTables-.git","svn_url":"https://github.com/jxw1994/multiFunctionTables-","homepage":null,"size":65,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":null,"allow_forking":true,"is_template":false,"topics":[],"visibility":"public","forks":0,"open_issues":0,"watchers":0,"default_branch":"master","score":1},{"id":276828809,"node_id":"MDEwOlJlcG9zaXRvcnkyNzY4Mjg4MDk=","name":"react-todo-app","full_name":"jadhavganesh704/react-todo-app","private":false,"owner":{"login":"jadhavganesh704","id":47173777,"node_id":"MDQ6VXNlcjQ3MTczNzc3","avatar_url":"https://avatars.githubusercontent.com/u/47173777?v=4","gravatar_id":"","url":"https://api.github.com/users/jadhavganesh704","html_url":"https://github.com/jadhavganesh704","followers_url":"https://api.github.com/users/jadhavganesh704/followers","following_url":"https://api.github.com/users/jadhavganesh704/following{/other_user}","gists_url":"https://api.github.com/users/jadhavganesh704/gists{/gist_id}","starred_url":"https://api.github.com/users/jadhavganesh704/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/jadhavganesh704/subscriptions","organizations_url":"https://api.github.com/users/jadhavganesh704/orgs","repos_url":"https://api.github.com/users/jadhavganesh704/repos","events_url":"https://api.github.com/users/jadhavganesh704/events{/privacy}","received_events_url":"https://api.github.com/users/jadhavganesh704/received_events","type":"User","site_admin":false},"html_url":"https://github.com/jadhavganesh704/react-todo-app","description":"Todo Application You have to build a simple todo-application with certain features listed in the following sections.    Fields which should be there in Todo Task  Field name Description UI​ ​Element Validations (if any)  CurrentState State of the task, open or done  None By default all tasks will be set to Pending.  Title One line summary of a task  Text input Max-length: 140 Chars Min-length: 10 Chars Accept: all Description Detail of the task Textarea Max-length: 500 chars Min-length: 10 chars Accept: all CreatedAt Timestamp when the task is created None Should be auto-filled based on current timestamp DueDate Target completion date and time Datepicker Time is optional Priority Priority of the tasks Dropdown None/Low/Medium/High    Components on the page 1. Add a task button​: A composer button, which we usually see at the bottom right corner of any application. The text of the button should be a plus symbol (+). For reference, see the gmail app. A modal will open with add-task-form. 2. Adding a task (​add-task-form ​ )​: Clicking on the + button should open a modal. A modal will have abovee mentioned fields. Use the following design for displaying the form inside the modal. Add validation on fields as mentioned in above table. By default the task should be treated as an open task. This task should be added at the top of the list in both “All tasks” and “Pending” tasks tabs.  By default the task should be treated as an open task. This task should be added at the top of the list in both “All tasks” and “Pending” tasks tabs.      3. ​Tabs​: The page should contain 3 tabs i. All tasks​: this tab will contain all the tasks. ii. Completed​: this tab will contain only completed tasks. iii. Pending​: this tab will contain only pending tasks. 4. ​List view of the tasks​: The content of each tab will be a list of tasks with the following columns Summary | Priority | Created On | Due Date | Actions Click on the task row. The modal should open read only view of ​add-task-form ​ with all fields filled in it.  5. ​Actions​: Icons for edit, delete, and close/open the task. See later sections for the description of these actions. To edit a task, click on the edit icon available in the Actions column of a row.   1. When a user clicks on the edit icon, a modal will open with add-task-form. The values of the current task will be prefilled in the form. 2. To delete a task, click on the delete icon available in the Actions column of a row. When a user clicks on the delete icon, a modal will open with the task summary.  The modal will also contain a question for the user: “Do you want to delete this task?”, with “Yes” and “No” action buttons. 3. Click the done button available in the Actions should so following things a. In the “All tasks” lists, the style of the task should change. E.g. make the background green, or put a strikethrough in the row. b. The “done” button should change to “re-open” in the actions column. c. A copy of task should be moved to “Completed” tab.    6. ​Search​: A text box to allow users to search within the page. 7. ​Group By dropdown​: A dropdown to allow the current tab’s list to be grouped by the selected item.    Sorting and Searching  Sorting  ● If a column is sortable (see the structure/configuration), clicking on the column header should sort the list based on that column. ● If you are considering ASC as default, the first click should sort the list in ascending order. ● If the user clicks on the column header again, the order should become descending. ● Subsequent clicks on the column header should alternate the sorting order.  Searching ● If a user starts to type in the “Search” text input, perform a search on the page with the given keyword. ● Filter Task according to searched text ● The search should be case-insensitive.    Group By ● The dropdown will contain list of attributes for which “Allow group by” has the value yes.  ● As per above mentioned structure, the group by drop down should contain ○ None ○ Created On ○ Pending On ○ Priority.  Sample: If the user selects Priority from the dropdown, the list should become like the following:   ","fork":false,"url":"https://api.github.com/repos/jadhavganesh704/react-todo-app","forks_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/forks","keys_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/keys{/key_id}","collaborators_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/teams","hooks_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/hooks","issue_events_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/issues/events{/number}","events_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/events","assignees_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/assignees{/user}","branches_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/branches{/branch}","tags_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/tags","blobs_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/git/refs{/sha}","trees_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/git/trees{/sha}","statuses_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/statuses/{sha}","languages_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/languages","stargazers_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/stargazers","contributors_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/contributors","subscribers_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/subscribers","subscription_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/subscription","commits_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/commits{/sha}","git_commits_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/git/commits{/sha}","comments_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/comments{/number}","issue_comment_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/issues/comments{/number}","contents_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/contents/{+path}","compare_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/compare/{base}...{head}","merges_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/merges","archive_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/downloads","issues_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/issues{/number}","pulls_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/pulls{/number}","milestones_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/milestones{/number}","notifications_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/labels{/name}","releases_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/releases{/id}","deployments_url":"https://api.github.com/repos/jadhavganesh704/react-todo-app/deployments","created_at":"2020-07-03T06:49:13Z","updated_at":"2020-07-03T07:07:43Z","pushed_at":"2020-07-03T07:07:41Z","git_url":"git://github.com/jadhavganesh704/react-todo-app.git","ssh_url":"git@github.com:jadhavganesh704/react-todo-app.git","clone_url":"https://github.com/jadhavganesh704/react-todo-app.git","svn_url":"https://github.com/jadhavganesh704/react-todo-app","homepage":null,"size":199,"stargazers_count":0,"watchers_count":0,"language":"JavaScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":null,"allow_forking":true,"is_template":false,"topics":[],"visibility":"public","forks":0,"open_issues":0,"watchers":0,"default_branch":"master","score":1},{"id":276828721,"node_id":"MDEwOlJlcG9zaXRvcnkyNzY4Mjg3MjE=","name":"react-toda-app","full_name":"jadhavganesh704/react-toda-app","private":false,"owner":{"login":"jadhavganesh704","id":47173777,"node_id":"MDQ6VXNlcjQ3MTczNzc3","avatar_url":"https://avatars.githubusercontent.com/u/47173777?v=4","gravatar_id":"","url":"https://api.github.com/users/jadhavganesh704","html_url":"https://github.com/jadhavganesh704","followers_url":"https://api.github.com/users/jadhavganesh704/followers","following_url":"https://api.github.com/users/jadhavganesh704/following{/other_user}","gists_url":"https://api.github.com/users/jadhavganesh704/gists{/gist_id}","starred_url":"https://api.github.com/users/jadhavganesh704/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/jadhavganesh704/subscriptions","organizations_url":"https://api.github.com/users/jadhavganesh704/orgs","repos_url":"https://api.github.com/users/jadhavganesh704/repos","events_url":"https://api.github.com/users/jadhavganesh704/events{/privacy}","received_events_url":"https://api.github.com/users/jadhavganesh704/received_events","type":"User","site_admin":false},"html_url":"https://github.com/jadhavganesh704/react-toda-app","description":"Todo Application You have to build a simple todo-application with certain features listed in the following sections.    Fields which should be there in Todo Task  Field name Description UI​ ​Element Validations (if any)  CurrentState State of the task, open or done  None By default all tasks will be set to Pending.  Title One line summary of a task  Text input Max-length: 140 Chars Min-length: 10 Chars Accept: all Description Detail of the task Textarea Max-length: 500 chars Min-length: 10 chars Accept: all CreatedAt Timestamp when the task is created None Should be auto-filled based on current timestamp DueDate Target completion date and time Datepicker Time is optional Priority Priority of the tasks Dropdown None/Low/Medium/High    Components on the page 1. Add a task button​: A composer button, which we usually see at the bottom right corner of any application. The text of the button should be a plus symbol (+). For reference, see the gmail app. A modal will open with add-task-form. 2. Adding a task (​add-task-form ​ )​: Clicking on the + button should open a modal. A modal will have abovee mentioned fields. Use the following design for displaying the form inside the modal. Add validation on fields as mentioned in above table. By default the task should be treated as an open task. This task should be added at the top of the list in both “All tasks” and “Pending” tasks tabs.  By default the task should be treated as an open task. This task should be added at the top of the list in both “All tasks” and “Pending” tasks tabs.      3. ​Tabs​: The page should contain 3 tabs i. All tasks​: this tab will contain all the tasks. ii. Completed​: this tab will contain only completed tasks. iii. Pending​: this tab will contain only pending tasks. 4. ​List view of the tasks​: The content of each tab will be a list of tasks with the following columns Summary | Priority | Created On | Due Date | Actions Click on the task row. The modal should open read only view of ​add-task-form ​ with all fields filled in it.  5. ​Actions​: Icons for edit, delete, and close/open the task. See later sections for the description of these actions. To edit a task, click on the edit icon available in the Actions column of a row.   1. When a user clicks on the edit icon, a modal will open with add-task-form. The values of the current task will be prefilled in the form. 2. To delete a task, click on the delete icon available in the Actions column of a row. When a user clicks on the delete icon, a modal will open with the task summary.  The modal will also contain a question for the user: “Do you want to delete this task?”, with “Yes” and “No” action buttons. 3. Click the done button available in the Actions should so following things a. In the “All tasks” lists, the style of the task should change. E.g. make the background green, or put a strikethrough in the row. b. The “done” button should change to “re-open” in the actions column. c. A copy of task should be moved to “Completed” tab.    6. ​Search​: A text box to allow users to search within the page. 7. ​Group By dropdown​: A dropdown to allow the current tab’s list to be grouped by the selected item.    Sorting and Searching  Sorting  ● If a column is sortable (see the structure/configuration), clicking on the column header should sort the list based on that column. ● If you are considering ASC as default, the first click should sort the list in ascending order. ● If the user clicks on the column header again, the order should become descending. ● Subsequent clicks on the column header should alternate the sorting order.  Searching ● If a user starts to type in the “Search” text input, perform a search on the page with the given keyword. ● Filter Task according to searched text ● The search should be case-insensitive.    Group By ● The dropdown will contain list of attributes for which “Allow group by” has the value yes.  ● As per above mentioned structure, the group by drop down should contain ○ None ○ Created On ○ Pending On ○ Priority.  Sample: If the user selects Priority from the dropdown, the list should become like the following:   ","fork":false,"url":"https://api.github.com/repos/jadhavganesh704/react-toda-app","forks_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/forks","keys_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/keys{/key_id}","collaborators_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/teams","hooks_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/hooks","issue_events_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/issues/events{/number}","events_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/events","assignees_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/assignees{/user}","branches_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/branches{/branch}","tags_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/tags","blobs_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/git/refs{/sha}","trees_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/git/trees{/sha}","statuses_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/statuses/{sha}","languages_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/languages","stargazers_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/stargazers","contributors_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/contributors","subscribers_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/subscribers","subscription_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/subscription","commits_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/commits{/sha}","git_commits_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/git/commits{/sha}","comments_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/comments{/number}","issue_comment_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/issues/comments{/number}","contents_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/contents/{+path}","compare_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/compare/{base}...{head}","merges_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/merges","archive_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/downloads","issues_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/issues{/number}","pulls_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/pulls{/number}","milestones_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/milestones{/number}","notifications_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/labels{/name}","releases_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/releases{/id}","deployments_url":"https://api.github.com/repos/jadhavganesh704/react-toda-app/deployments","created_at":"2020-07-03T06:48:37Z","updated_at":"2020-07-03T06:48:41Z","pushed_at":"2020-07-03T06:48:38Z","git_url":"git://github.com/jadhavganesh704/react-toda-app.git","ssh_url":"git@github.com:jadhavganesh704/react-toda-app.git","clone_url":"https://github.com/jadhavganesh704/react-toda-app.git","svn_url":"https://github.com/jadhavganesh704/react-toda-app","homepage":null,"size":3,"stargazers_count":0,"watchers_count":0,"language":null,"has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":null,"allow_forking":true,"is_template":false,"topics":[],"visibility":"public","forks":0,"open_issues":0,"watchers":0,"default_branch":"master","score":1}]}

  res.status(200).json(results);
}
