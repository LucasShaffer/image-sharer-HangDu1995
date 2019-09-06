# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

link_list = [
  'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Pomeranian_01.jpg?bust=1538074638&width=290',
  'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080',
  'https://www.gannett-cdn.com/authoring/video-thumbnails/4e66a4d0-7f81-4bda-882d-d7a18937f061_poster.jpg',
  'https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg',
  'https://i.ytimg.com/vi/AZ2ZPmEfjvU/maxresdefault.jpg',
  'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/08/931/524/golden-retriever-istock.jpg?ve=1&tl=1',
  'https://img.buzzfeed.com/buzzfeed-static/static/2019-09/5/20/campaign_images/fedddb57af1e/an-australian-cat-with-penis-shaped-markings-is-u-2-537-1567714988-0_dblbig.jpg',
  'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
  'https://resize.hswstatic.com/w_907/gif/tesla-cat.jpg',
  'https://dogshome.com/wp-content/uploads/animalimages//1059631/c42d7677af574346851094d3df742d43-1567142340-1567142344_srch.jpg',
  'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a',
  'https://www.medicalnewstoday.com/content//images/articles/325/325178/photograph-of-humpback-whale.jpg',
  'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555389498/shape/mentalfloss/istock_000046395108_small_0.jpg',
  'https://c402277.ssl.cf1.rackcdn.com/photos/11558/images/hero_small/shutterstock_112249448.jpg?1462221839',
  'https://ichef.bbci.co.uk/images/ic/640x360/p05tnhkk.jpg',
  'https://oceanwide-4579.kxcdn.com/uploads/media-dynamic/cache/jpg_optimize/uploads/media/default/0001/34/thumb_33027_default_1600.jpeg',
  'https://i2.wp.com/astrobob.areavoices.com/files/2016/05/Aurora-May1_2016-very-purple-flames-F_S.jpg',
  'https://www.hurtigruten.com/globalassets/photos/inspiration/northern-lights/hub/aurora-borealis-above-snowy-island-vestvagoya-lofoten_swen-stroop.jpg?width=1900&height=950&transform=DownFill',
  'https://patch.com/img/cdn20/users/22992871/20180627/094635/styles/raw/public/processed_images/northern_lights-1530107173-7486.jpg'
]

link_list.each do |link|
  Image.create!(link: link)
end
