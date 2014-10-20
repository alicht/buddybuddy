task :deploy do
  system '/public/ember build --environment production'
  system 'cp public/dist/index.html app/views/layouts/application.html.erb'
  system "git add app/*"
  system "git commit -am 'deployment commit'"
  system "git push origin master"
end
