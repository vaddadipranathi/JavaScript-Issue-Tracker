
var issueList = {

  issues: [],

  displayissue: function () {

    if (this.issues.length === 0) { //display error message ..if no issue is avliable
      console.log("no issues avlible ");
    }
    else { //display issues if avliable
      console.log("My issues: ");
      for (var i = 0; i < this.issues.length; i++) {
        var issue = this.issues[i];
        var issuewithstatus = '';
        if (issue.completed === true) {
          issuewithstatus = 'true - ' + issue.issuename;
        }
        else {
          issuewithstatus = 'falsee - ' + issue.issuename;
        }
        console.log(issuewithstatus); //display issue with its status
      }
    }
  },
  addIssue: function (newIssue) {
    this.issues.push({
      issuename: newIssue,
      completed: false
    });
    this.displayissue();
  },
  changeIssue: function (position, newIssue) {
    this.issues[position].issuename = newIssue;
    this.displayissue();
  },
  deleteIssue: function (position) {
    this.issues.splice(position, 1);
    this.displayissue();
  },
  toggleIssue: function (position) {
    var issue = this.issues[position];
    issue.completed = true;
    this.displayissue();
  },
  toggleAllIssues: function () {
    var totalIssues = this.issues.length;
    var completedIssueCount = 0;
    for (var i = 0; i < totalIssues; i++) {
      if (this.issues[i].completed === true) {
        completedIssueCount++;
      }
    }
    if (completedIssueCount === totalIssues) {
      for (var i = 0; i < totalIssues; i++) {
        thiis.issues[i].completed = false;
      }
    }
    else {
      for (var i = 0; i < totalIssues; i++) {
        this.issues[i].completed = true;
      }
    }
    this.displayissue();
  }
}

// var displayAll = document.getElementById('displayAll');// -------------add event listerner-------------------------
// displayAll.addEventListener('click', function () {
//   issueList.displayissue();
// });
// var toggleAllIssues = document.getElementById('toggleAllIssues');// -------------add event listerner-------------------------
// toggleAllIssues.addEventListener('click', function () {
//   issueList.toggleAllIssues();
// });

var handlers = {
  displayissue: function () {
    issueList.displayissue();
  },
  toggleAllIssues: function () {
    issueList.toggleAllIssues();
    view.displayissue();
  },
  addIssue: function () {
    var issueText = document.getElementById('issueText');
    issueList.addIssue(issueText.value);
    view.displayissue();
    issueText.value = '';
  },
  changeIssue: function () {
    var changeposition = document.getElementById('changeposition');
    var changeissue = document.getElementById('changeissue');
    issueList.changeIssue(changeposition.valueAsNumber, changeissue.value);
    view.displayissue();
    changeposition.value = '';
    changeissue.value = '';
  },
  deleteIssue: function (position) {
    var deletepositionissue = document.getElementById('deletepositionissue');
    issueList.deleteIssue(position);
    view.displayissue();
    deletepositionissue.value = '';
  },
  toggleIssue: function () {
    var toggleposition = document.getElementById('toggleposition');
    issueList.toggleIssue(toggleposition.value);
    view.displayissue();
    toggleposition.value = '';
  }
}


var view = {
  displayissue: function () {
    var issueIUi = document.querySelector('ul');
    issueIUi.innerHTML = '';
    var issuewithstatus = '';
    for (var i = 0; i < issueList.issues.length; i++) {
      var issueLi = document.createElement('li');
      var issue = issueList.issues[i];
      if (issue.completed === true) {
        issuewithstatus = 'true - ' + issue.issuename;
      }
      else {
        issuewithstatus = 'false - ' + issue.issuename;
      }
      issueLi.id = i;
      issueLi.textContent = issuewithstatus;
      issueLi.appendChild(this.createDeleteButton());
      issueIUi.appendChild(issueLi);
    }
  },
  createDeleteButton: function () {
    var deleteButton = '';
    deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'deleteIssue';
    return deleteButton;
  },
  setUpEventListener: function () {
    var issueUL = document.querySelector('ul');
    issueUL.addEventListener('click', function (event) {

      //GET THE TARGET ELEMENT THAT IS CLICKED
      var elementClicked = event.target;

      //check if elemt clicked isdeleteIssue button
      if (elementClicked.className === 'deleteIssue') {
        //call handlers delte method here
        handlers.deleteIssue(elementClicked.parentNode.id);

      }
      console.log(parseInt(event.target.parentNode.id));
    })
  }
};
view.setUpEventListener();
