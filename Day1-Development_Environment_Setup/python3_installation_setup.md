##### Installing Python 3
python3 -V </br>
Python 3.8.10 

###### Commands to Install 

sudo apt install python3 </br> 

###### pip installation 
pip: Pip Installs Packages </br>  
info: It is a package manager for the Python programming language that allows you to download and install Python packages and their dependencies on a Linux system. </br>   

sudo apt install python3-pip

###### Python Virtual Environments 
 Python Virtual Environments are a method of creating isolated "environments" with specific versions of Python installed along with independent sets of libraries and dependencies.

 sudo apt install python3.8-venv  </br>  
 python3.8 -m venv py3-venv [create] </br>   
 [activate] </br>  
 source py3-venv/bin/activate </br>  
 Expected Output </br>  
 (py3-venv) [dev@ubuntu ~]$ </br>   


Deactivate the virtual environment. </br>  
(py3-venv) [dev@ubuntu ~]$ deactivate </br>   