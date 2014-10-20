task :deploy do
  system 'ember build --environment production'
  system 'cp public/dist/index.html app/views/layouts/application.html.erb'
end
