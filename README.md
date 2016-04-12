# allan-raspi-node

Interfaz de conexión para un Raspberry Pi 2 por medio de NodeJS (Express, Socket.io)

#Linux Users
Bash on Ubuntu on Windows / Linux Terminal Ubuntu/Deb

> user@user:~#      "ssh pi@<IP_ADDRESS>"

> root@localhost:~# "ssh pi@<IP_ADDRESS>"

> ´pi@192.168.0.106's password: raspberry´


 The programs included with the Debian GNU/Linux system are free software;
 the exact distribution terms for each program are described in the
 individual files in /usr/share/doc/*/copyright.

 Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
 permitted by applicable law.
 Last login: Mon Apr 11 23:45:08 2016 from 192.168.0.102

 > pi@raspberrypi:~ $ sudo su
 >> root@raspberrypi:/home/pi#
 >> mkdir node_programs && cd node_programs


##Install NodeJS ( https://nodejs.org/en/download/package-manager/ )
 > root@raspberrypi:/home/pi/node_programs/ node -v
 >> v5.10.1

##Install NPM  ( apt-get install npm )
> root@raspberrypi:/home/pi/node_programs/ npm -v
>> 3.8.3

##Install Git  ( apt-get install git )
> root@raspberrypi:/home/pi/node_programs/git --version
>> git version 2.1.4

##Clone git inside yourWorkDirectory

> git clone https://github.com/aallanrd/allan-raspi-node/
> cd allan-raspi-node

## npm-dependencies
> npm install express socket.io
  >>  normalizeTree → network   ▌ ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
  >> .......
  >> ....
  >> ...

## execute  node-web-cam-server
> node index.js
>>Server  192.168.0.106:3000

#Git Options
> git pull (Carga los datos remotos)






#






