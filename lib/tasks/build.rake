task :build do
  system 'cd ember && ember build --environment=production'
  system 'cp ember/dist/index.html app/views/layouts/application.html.erb'
  system 'cp -R ember/dist/assets public'
  system 'cp -R ember/dist/fonts public'
end
