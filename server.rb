require 'sinatra'

get '/' do
  headers 'Access-Control-Allow-Origin' => '*'
  @temp = 45
   @temp.to_json
end
