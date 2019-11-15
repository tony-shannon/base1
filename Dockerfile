FROM gitpod/workspace-full:latest

USER root
# Install custom tools, runtime, etc.
RUN npm install -g --unsafe-perm node-red

USER gitpod
# Apply user-specific settings
# ENV ...

# Give back control
USER root