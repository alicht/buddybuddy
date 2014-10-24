task :build do
  system 'cd ember && ember build --environment production'
  system 'cp ember/dist/index.html app/views/layouts/application.html.erb'
  system 'cp ember/dist/assets/vendor.css public/assets/vendor.css'
  system 'cp ember/dist/assets/buddybuddy.css public/assets/buddybuddy.css'
  system 'cp ember/dist/assets/vendor.js public/assets/vendor.js'
  system 'cp ember/dist/assets/buddybuddy.js public/assets/buddybuddy.js'
  system 'cp -R ember/dist/fonts public'
end
