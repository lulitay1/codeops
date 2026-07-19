Day 1 Practical Exercise – Environment Setup, Terminal, Git & GitHub

Part 1: Create the Project

mkdir codeops
cd codeops
mkdir module1/day01
cd module1/day01
touch README.md notes.txt commands.md
echo - e " # CodeOPS Day 1\n Student Name: Lulit Ayele \n Date: 2026-0-18 > README.md

cat << EOF>> notes.txt
Today I learned:
- Terminal
- Git
- GitHub
EOF

cat README.md
cat notes.txt
cat README.md notes.txt


part 2: Terminal commands

pwd
ls
ls -a or ls -la
mv notes.txt terminal-notes.txt
cp README.md README-copy.md
mkdir backup
mv README-copy.md backup/
find .

Part 3: Git

git init
git status
git add .
git commit -m "setup git and terminal initial commit"
<!-- Edit the file we want. edited README.md this time  -->
git status 
git add README.md
git commit -m "Added description on README"
git history
<!-- All commands -->
git log --oneline
<!-- All commit history in one line. -->

Part 4: GitHub

<!--Create a repo on github  -->
git remote add origin url
git branch -M main
push origin -u orgin main
<!-- check files exist in the remote repo -->
git remote -v 

part 5: Reflection
touch reflection.md
<!-- Edited reflection to add answers of the questions -->
git status
git add reflection.md
git commit -m "Added a reflection files with questions and answers on git, github and terminals"
git push

Bonus challenge

touch .gitignore
nano .gitignore 
node_modules/
.env
*.log
touch .env
git status
<!-- Check that the files inside .gitignore are actually ignored (.env is ignored) -- they are blurred and when git status .env does not appear -->

