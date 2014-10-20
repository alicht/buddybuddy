task :deploy do
  system '/ember ember build --environment production'
  system 'cp /ember/dist/index.html app/views/layouts/application.html.erb'
  system "git add app/*"
  system "git commit -am 'deployment commit'"
  system "git push origin master"
end
