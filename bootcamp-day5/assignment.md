
1. Find and terminate the top memory-consuming process on your system.

-> Using  **top** and then we can press shift + M to get the most cosuming process on top of list and using *kill (process id)* we can kill that process



2. Create a user named devops and grant them sudo privileges.


->  **sudo adduser username** will add the user and make its group accordingly then we can use **sudo usermod -aG sudo username**  to give sudo privileges to user , and we use sudo group since its automatically configured by ubuntu to have admin privileges and will automatically grante admin privileges to user under those groups



3. Connect to a remote server, create a directory, and copy files into it using SCP.


->  We connect to remote server using command **ssh username@ip_addr** we can find ip_addr of any system by using command **hostname -I** and then for creating a dir in the connected system we use **mkdir directory_name** , for copying we use **scp myusername@my_ipaddr:my_file_path destination_file_path**


Example :- scp your-username@<your-ip>:/home/your-username/file.txt /home/connect_username/mytask/



4. List all active processes and save only those containing the word java into a file.



->  **ps aux | grep java > file.txt**  in here ps aux will give all active process ids with name in command column and then will give that output to grep which will find java into it and xargs will take that input stream and put it into file.txt


5. Generate an SSH key pair and configure it for two different remote servers.


-> **ssh-keygen -t rsa -b 4096 -C "your_email"**

 **ssh-copy-id username@ip_addr**

 here the ssh keygen generates the key value pair using rsa algo with the bytes mentioned and emial is given for identification and then we copy our public key to server we are connecting and after it we dont need to give password again and again our private key will authenticate it



6. Find all lines containing “error” in /var/log/syslog and redirect them to errors_found.txt


-> **grep "error" /var/log/syslog > errors_found.txt**
It finds error containing in the file and redirects to file using > 

7. Find all .conf files in /etc, sort them alphabetically, and save to conf_list.txt.

->  **find /etc -name "\*.conf" 2> file.txt | sort > conf_list.txt** 


it will find all file with name ending conf and directs error to file.txt since some file do not have permission and then sort it and direct towrds the file 


8. Display the total number of unique shell types listed in /etc/passwd and save to shell_count.txt



-> **cut -d":" -f7 /etc/passwd | egrep "(bash|sh|zsh|csh|ksh|tcsh)$" | wc -l > shell_count.txt**


here first we will extract the 7th column using cut so that we get the path and then we will check by grep if any of the path matches the pattern and we just number of lines and output it into shell_count



9. Explore vi/vim for  Creating a text file. Understand cursor movement, switching input mode (append, insert etc), deleting command, pasting content, undo , redo ,search , save and quit operations in vim. 



->  For insert in vim we use type i and for escaping each we will press esc key and then for up/down/left/right k/j/h/l  is used , for deleting x and for copy-paste clipboard should be enable then pressing i do normal copy paste us8 


10. Reset the current user password and reboot the system form shell. 


->  **passwd**  and doing **sudo reboot** will do these both work 


11. Zip the content of your home directory via tar and send it via scp to other person laptop. Unzip the content on other person laptop via tar. 


-> 
 **tar -cvf newfile.tar path_to_folder** for compressing in our system 

 then connect to remote server using ssh username@ip_addr

 **scp your_username@ip_addr:your_folder remote_folder**   for copying 

 then use **tar -xvf newfile.tar** for extracting 


12. Install and setup application via apt - mysql, postman, docker, dbeaver


->  **sudo apt install mysql-server -y**   for installing mysql server

postman , docker and dbeaver are installed using snap here 

 


