# Installation Overview 

The installation of the ORR is greatly facilitated with the use of
[Docker container technology](https://www.docker.com/what-docker).
Your target machine should have the following:

- [Docker Engine](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)
  (included with the Engine for some target platforms)

    
The Docker images comprising the ORR system are:

| Image |  Name |  Purpose |
|-|-|-|
| [mmisw/orr]       | ORR          | The ORR system itself |
| [mongo]           | MongoDB      | Persist all data |
| [franzinc/agraph] | AllegroGraph | Triple store and SPARQL endpoint |

!!! note ""
    **Note**: You don't need to manually download these images.
    With the `docker-compose.yml` file described below, Docker Compose takes care 
    of pulling and running these images.

# Configuring and Launching the ORR System

To further facilitate this task, we have put together a template that you can get from
[https://github.com/mmisw/orr-instance-template/releases/](https://github.com/mmisw/orr-instance-template/releases/).
Expand the zip or tarball under a location of your choice.

!!! note ""
    If you have a Git client, you can alternatively clone the
    [orr-instance-template](https://github.com/mmisw/orr-instance-template) repository; see
    [README file](https://github.com/mmisw/orr-instance-template/blob/master/README.md)
    there for details.

The template mainly consists of configuration files and the `docker-compose.yml`
specification to be passed to Docker Compose.
The template contents are:

    ├── README.md
    ├── config
    │   ├── notifyemails
    │   └── orront.conf
    ├── docker-compose.yml
    └── setenv.sh 

From the template, edit the following files
(please see the contents of the files for additional details):

- `setenv.sh` to indicate a number of required settings via environment variables;
- `config/orront.conf`, the master configuration for your ORR instance;
- `config/notifyemails`, to specify email addresses that should be notified 
  whenever there is a registration event (user, organization, or ontology).
  This is optional.

With these pieces in place, you can now launch the ORR:

    $ source setenv.sh
    $ docker-compose up -d
    Starting agraph
    Starting mongo
    Starting orr
    
To inspect the ORR log:

    $ docker logs -f --tail=100 orr
        
Open the ORR in your browser. For example, with 9090 as the associated host port
(value of `ORR_HOST_PORT` in `setenv.sh`),
you can now open [http://localhost:9090/ont/](http://localhost:9090/ont/).
You can login with the username "admin" and the password indicated via the
`admin.password` entry in `orront.conf`.
 

To stop and restart individual containers:

    $ docker stop orr
    $ docker start orr
    $ docker restart orr

To shutdown the whole ORR:

    $ docker-compose down
    Stopping orr ... done
    Stopping mongo ... done
    Stopping agraph ... done
    Removing orr ... done
    Removing mongo ... done
    Removing agraph ... done


A crontab like the following could be defined for a complete ORR start at reboot time:
     
    @reboot sleep 30 && docker start mongo agraph orr



!!! danger "Note" 
    The above Docker set-up should in general be complemented with appropriate
    mechanisms toward a production environment.
    Aspects to consider include:
    making your ORR instance externally visible, re-starting the containers to reflect configuration
    and image updates, logging, backups, etc.
    Also, depending on the target platform, the user performing the deployment should have 
    the relevant Docker privileges.
    For example, via a command like: `sudo usermod -a -G docker username`.
    Please check with your sysadmin.

**Apache HTTPD proxy configuration**

Just as a suggestion (please check with your sysadmin), the following is a possible Apache
proxy configuration to externally expose the ORR itself and the SPARQL endpoint through the `/ont`
and `/sparql` context paths under your main HTTP server:

    ProxyPass        /ont http://localhost:9090/ont
    ProxyPassReverse /ont http://localhost:9090/ont

    ProxyPass        /sparql http://localhost:10035/repositories/mmiorr
    ProxyPassReverse /sparql http://localhost:10035/repositories/mmiorr




-------------
[mmisw/orr]: https://hub.docker.com/r/mmisw/orr/
[mongo]: https://hub.docker.com/_/mongo/
[franzinc/agraph]: https://hub.docker.com/r/franzinc/agraph/
