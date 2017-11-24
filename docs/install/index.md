# Installing the ORR System

## ORR Deployment via Docker

The installation of the ORR is greatly facilitated with the use of
[Docker container technology](https://www.docker.com/what-docker).
Please install on your target machine:

- [Docker Engine](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)


!!! note 
    The user performing the deployment should have the relevant Docker privileges.
    For example, via a command like: `sudo usermod -a -G docker username`.
    Please check with your sysadmin.

    
The Docker images required to run the ORR system are:

| Image |  Name |  Purpose |
|-|-|-|
| [mmisw/orr]       | ORR          | The ORR system itself |
| [mongo]           | MongoDB      | Persist all data |
| [franzinc/agraph] | AllegroGraph | Triple store and SPARQL endpoint |

With the `docker-compose.yml` file indicated below, Docker Compose takes care 
of pulling and running these images.

A complete deployment of the ORR, including the required supporting services,
consists of the following steps.

- Create a directory on your host machine as a base location for all
  configuration files and data (ontology files, MongoDB data, etc.).

- Create these subdirectories:

        $ mkdir configDir
        $ mkdir mongo_data
        $ mkdir orr_data
    
- Get these files:

        $ curl -o docker-compose.yml     https://mmisw.org/orrdoc/install/docker-compose.yml
        $ curl -o configDir/orront.conf  https://mmisw.org/orrdoc/install/orront.conf

- Optionally, to specify a list of email addresses that should be notified whenever there's a
registration of a user, organization, or ontology, create a `configDir/notifyemails` 
text file and put each email address on a line by itself, e.g.,:

        $ cat > configDir/notifyemails
        foo@example.net
        other@example.net
        ^D
        
     (The `#` character can be used to indicate comments in this file.)

- Edit the downloaded files as indicated in their contents.


- Launch the ORR:

        $ docker-compose up -d
        Starting agraph
        Starting mongo
        Starting orr
    
- Inspect the log:

        $ docker logs -f --tail=100 orr
        
- Open the ORR in your browser. For example, assuming 9090 is the associated host port,
  you can now open [http://localhost:9090/ont/](http://localhost:9090/ont/).
  You can login with the username "admin" and the password indicated in `orront.conf`.
 

- To shutdown the whole ORR:

        $ docker-compose down
        Stopping orr ... done
        Stopping mongo ... done
        Stopping agraph ... done
        Removing orr ... done
        Removing mongo ... done
        Removing agraph ... done


- To stop and restart individual containers:

        $ docker stop orr
        $ docker start orr
        $ docker restart orr

    A crontab like the following could be defined for a complete ORR start at reboot time:
     
        @reboot docker start mongo agraph orr



!!! danger "Note" 
    The above Docker set-up should in general be complemented with appropriate
    mechanisms toward a production environment.
    Aspects to consider include:
    making your ORR instance externally visible, re-starting the containers to reflect configuration
    and image updates, logging, backups, etc.
    Please check with your sysadmin.


### Apache HTTPD proxy configuration

Just as a suggestion (please check with your sysadmin), the following is a possible Apache
proxy configuration to expose the ORR itself and the SPARQL endpoint through the `/ont`
and `/sparql` context paths under your main HTTP server:

    ProxyPass        /ont http://localhost:9090/ont
    ProxyPassReverse /ont http://localhost:9090/ont

    ProxyPass        /sparql http://localhost:10035/repositories/mmiorr
    ProxyPassReverse /sparql http://localhost:10035/repositories/mmiorr



-------------
[mmisw/orr]: https://hub.docker.com/r/mmisw/orr/
[mongo]: https://hub.docker.com/_/mongo/
[franzinc/agraph]: https://hub.docker.com/r/franzinc/agraph/
