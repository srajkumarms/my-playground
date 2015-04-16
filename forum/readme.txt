/* Do this from Cloud9 IDE */

git add forum
git commit -m 'initial commit'


git add node_modules -f
git commit -m 'initial commit [node modules]'

git push -u origin master


/* Do this from desktop */
// to update local repository
git fetch --all
git merge origin/master

// to check in to git
git add forum
git commit -m 'desktop checkin comments'
git push -u origin master

https://gist.github.com/iansheridan/870778

__________________________________________________________________

To setup MongoDB in Cloud9
	> mongod --bind_ip=$IP --nojournal
	> mongo


MongoDB Commands:
$ show collections
$ db.collectionName.drop()
$ 