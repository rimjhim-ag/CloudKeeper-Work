**1. Configure SSH key in github account.**


->  First we have to make an ssh key pair and then by doing 

**cat ~/.ssh/id_ed25519.pub**
 **cat ~/.ssh/id_rsa.pub**


 to display the key and copying it and then on github 

 Github-> setting-> ssh & gpg keys -> new ssh -> add copied sshkey

**ssh -T git@github.com** 
confims connection is established


**2. Create a repository on github account.**


-> Go to repository on github make a new github repo 

**3. Clone the above repository on your local from github.** 


-> Using https we just do git clone respository link

Using ssh git clone git@github.com:username/repo.git


**4. Create a new file, say test.txt, in main/master branch. Make some changes to this file and commit the changes.**


->  git add .
git commit -m "Message"
git push --set-upstream origin branch_name 

for first time to have link b/w local and remote branches in future 

**For 5 to 6 , we can checkout cloudkeep-bootcamp06-work**   :- https://github.com/rimjhim-ag/CloudKeep-Bootcamp06-work


**7. Show how divergence occurs in a branch.**


-> Diverge occures when two branches A, B which have same starting head commit have both made some changes or commit so they both have diverted now either we have to go to A branch and merge B into it or we can rebase B branch on top of A .


**8. Difference between git init and git clone.**


-> git init make an empty git repo in our folder which do not have any remote yet , we need to set remote ourselves.It is also used when we start a new project

git clone intialize plus copies remote copy of repo in our local which is linked to remote and we can track automatically, When we want to work on existing one .


**9. Difference between git branch and git checkout.**


->  git branch shows all existing branch on our local setup but git checkout is used to switch to a branch and also we can make a branch and switch to it automatically using it .


**10. Difference between git fetch and git pull.**


-> git fetch , fetches all latest commits history of remote into local . git pull fetches and also merge the changes into our current branch


**11. How to squash commits?**

-> We do squash by picking up commits doing **git rebase -i HEAD~2**

**press i**

after this we make the latest **commit pick to squash and then save it**


**press Esc key and do :wq**
 rebase will happen automatically




**12. Show the difference between git reset and git revert**


->  git revert command undoes a committed snapshot, instead of removing the commit from the project history.



 doing git reset there is no way to retrieve the original copy—it is a permanent undo.




**13. Delete branch from local and remote.**


-> Just do git branch -D branch_name will delete from local

git push origin --delete branch-name  will delete from remote 
