FROM gitpod/workspace-full:latest

USER root
# Install custom tools, runtime, etc.
RUN npm install -g --unsafe-perm node-red
#RUN npm install -g json-server

USER gitpod
# Apply user-specific settings
# ENV ...
RUN sudo install -g json-server

# Give back control
#USER root