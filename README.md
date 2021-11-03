# Install Project
In the admin folder, execute "npm install".

# Install browser-sync
Execute the command "npm install -g browser-sync" to install [browser-sync](https://browsersync.io/).

# Init JSON Server
Execute the command "npx json-server --watch db.json" to init server in http://localhost:3000.

# Execute Project
In another Terminal (If you use Visual Studio Code, press "Ctrl + Shift + ' "), execute the command "browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html" in the folder "admin" to start project. 
