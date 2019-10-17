require 'sinatra'

get '/' do
  headers 'Access-Control-Allow-Origin' => '*'
  @temp = 78
   @temp.to_json
end
