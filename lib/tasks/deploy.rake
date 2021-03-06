task :deploy do
  Rake::Task["build"].reenable
  Rake::Task["build"].invoke
  system "git add app/views/layouts/application.html.erb/*"
  system "git add public/assets/*"
  system "git add public/fonts/*"
  system "git add public/images/*"
  system "git commit -am 'deployment commit'"
  system "git push origin master"
end
