export const ERROR_MESSAGE = {
  NO_INPUT: "The parameter bbox is required, and must be of the form min_lon,min_lat,max_lon,max_lat.",
  LAT_LONG_MIN_MAX: "The latitudes must be between -90 and 90, longitudes between -180 and 180 and the minima must be less than the maxima.",
  REQUEST_TOO_LARGE: "The maximum bbox size is 0.25, and your request was too large. Either request a smaller area, or use planet.osm"
}

export const OSM_XML =
  `<?xml version="1.0" encoding="UTF-8"?>
  <osm version="0.6" generator="CGImap 0.8.3 (3256611 spike-06.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
   <bounds minlat="59.9625400" minlon="13.3708400" maxlat="59.9692900" maxlon="13.3938500"/>
   <node id="1352343811" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:11Z" user="MickeL" uid="33169" lat="59.9518571" lon="13.3601876"/>
   <node id="1352343814" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:11Z" user="MickeL" uid="33169" lat="59.9527398" lon="13.3616259"/>
   <node id="1352343816" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:11Z" user="MickeL" uid="33169" lat="59.9531801" lon="13.3623233"/>
   <node id="1352343820" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:11Z" user="MickeL" uid="33169" lat="59.9536507" lon="13.3627175"/>
   <node id="1352343830" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:11Z" user="MickeL" uid="33169" lat="59.9552296" lon="13.3635059"/>
   <node id="1352343834" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:12Z" user="MickeL" uid="33169" lat="59.9555029" lon="13.3637484"/>
   <node id="1352343836" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:12Z" user="MickeL" uid="33169" lat="59.9557002" lon="13.3642639"/>
   <node id="1352343838" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:12Z" user="MickeL" uid="33169" lat="59.9559583" lon="13.3646126"/>
   <node id="1352343842" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:12Z" user="MickeL" uid="33169" lat="59.9564213" lon="13.3648703"/>
   <node id="1352343848" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:12Z" user="MickeL" uid="33169" lat="59.9568312" lon="13.3650522"/>
   <node id="1352343853" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:12Z" user="MickeL" uid="33169" lat="59.9575522" lon="13.3655374"/>
   <node id="1352343858" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:13Z" user="MickeL" uid="33169" lat="59.9579925" lon="13.3655980"/>
   <node id="1352343859" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:13Z" user="MickeL" uid="33169" lat="59.9582505" lon="13.3654919"/>
   <node id="1352343862" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:13Z" user="MickeL" uid="33169" lat="59.9585769" lon="13.3655677"/>
   <node id="1352343865" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:13Z" user="MickeL" uid="33169" lat="59.9587135" lon="13.3658406"/>
   <node id="1352343872" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:13Z" user="MickeL" uid="33169" lat="59.9589867" lon="13.3668260"/>
   <node id="1352343879" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:14Z" user="MickeL" uid="33169" lat="59.9591992" lon="13.3671444"/>
   <node id="1352343886" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:14Z" user="MickeL" uid="33169" lat="59.9596015" lon="13.3674628"/>
   <node id="1352343888" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:14Z" user="MickeL" uid="33169" lat="59.9601479" lon="13.3681602"/>
   <node id="1352343889" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:14Z" user="MickeL" uid="33169" lat="59.9605274" lon="13.3682966"/>
   <node id="1352343893" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:14Z" user="MickeL" uid="33169" lat="59.9614685" lon="13.3685089"/>
   <node id="1352343896" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9623640" lon="13.3689182"/>
   <node id="1352343899" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9629028" lon="13.3691153"/>
   <node id="1352343900" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9632443" lon="13.3692669"/>
   <node id="1352343901" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9637831" lon="13.3698885"/>
   <node id="1352343902" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9644641" lon="13.3737641"/>
   <node id="1352343903" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9645045" lon="13.3736027"/>
   <node id="1352343904" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9645116" lon="13.3705555"/>
   <node id="1352343905" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9645200" lon="13.3739007"/>
   <node id="1352343906" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9646381" lon="13.3738635"/>
   <node id="1352343907" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9646475" lon="13.3735840"/>
   <node id="1352343908" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9647252" lon="13.3736772"/>
   <node id="1352343909" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9648075" lon="13.3735119"/>
   <node id="1352343910" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9650883" lon="13.3710407"/>
   <node id="1352343911" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9652476" lon="13.3731329"/>
   <node id="1352343912" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9653159" lon="13.3716168"/>
   <node id="1352343913" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9654146" lon="13.3727387"/>
   <node id="1352343914" visible="true" version="1" changeset="8655436" timestamp="2011-07-07T09:08:15Z" user="MickeL" uid="33169" lat="59.9654222" lon="13.3722990"/>
   <node id="2927821018" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9680733" lon="13.4122075"/>
   <node id="2927821019" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9660220" lon="13.4189882"/>
   <node id="2927821027" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9704251" lon="13.3998694"/>
   <node id="2927821029" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9697271" lon="13.4089245"/>
   <node id="2927821036" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9695338" lon="13.4062638"/>
   <node id="2927821046" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9704466" lon="13.4013070"/>
   <node id="2927821048" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9702318" lon="13.3979811"/>
   <node id="2927821049" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9692761" lon="13.3965220"/>
   <node id="2927821052" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9698882" lon="13.4084524"/>
   <node id="2927821057" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9687606" lon="13.4048476"/>
   <node id="2927821060" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9659254" lon="13.4137954"/>
   <node id="2927821064" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:26Z" user="Per" uid="2690" lat="59.9696734" lon="13.4023370"/>
   <node id="2927821066" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9652810" lon="13.4150614"/>
   <node id="2927821067" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9703607" lon="13.3984317"/>
   <node id="2927821068" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9703821" lon="13.4006848"/>
   <node id="2927821069" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9703821" lon="13.4018435"/>
   <node id="2927821078" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9667846" lon="13.4133877"/>
   <node id="2927821079" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9652380" lon="13.4160699"/>
   <node id="2927821088" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9694157" lon="13.4096326"/>
   <node id="2927821090" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9691042" lon="13.4053840"/>
   <node id="2927821092" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9652165" lon="13.4167780"/>
   <node id="2927821100" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9703284" lon="13.4072508"/>
   <node id="2927822703" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9677833" lon="13.4209408"/>
   <node id="2927822707" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:27Z" user="Per" uid="2690" lat="59.9685780" lon="13.3954706"/>
   <node id="2927822714" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9687391" lon="13.4219279"/>
   <node id="2927822716" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9689002" lon="13.4108128"/>
   <node id="2927822717" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9686103" lon="13.4042467"/>
   <node id="2927822719" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9701459" lon="13.4020581"/>
   <node id="2927822723" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9694264" lon="13.4059419"/>
   <node id="2927822724" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9681270" lon="13.4213485"/>
   <node id="2927822725" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9656676" lon="13.4140529"/>
   <node id="2927822727" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9701244" lon="13.4068217"/>
   <node id="2927822747" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:28Z" user="Per" uid="2690" lat="59.9673323" lon="13.4205331"/>
   <node id="2927822752" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9702855" lon="13.4082808"/>
   <node id="2927822753" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9684921" lon="13.4115209"/>
   <node id="2927822759" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9688412" lon="13.4222026"/>
   <node id="2927822760" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9704251" lon="13.3989682"/>
   <node id="2927822761" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9684062" lon="13.3951272"/>
   <node id="2927822763" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9699741" lon="13.3975305"/>
   <node id="2927822765" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9664194" lon="13.4194817"/>
   <node id="2927822768" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9685351" lon="13.4215631"/>
   <node id="2927822772" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9656354" lon="13.4183659"/>
   <node id="2927822776" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9676222" lon="13.4127869"/>
   <node id="2927822779" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9687176" lon="13.4029378"/>
   <node id="2927822781" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9653562" lon="13.4177222"/>
   <node id="2927822785" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9653562" lon="13.4145250"/>
   <node id="2927822793" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9664194" lon="13.4136667"/>
   <node id="2927822794" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9668275" lon="13.4201254"/>
   <node id="2927822800" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9704036" lon="13.4080662"/>
   <node id="2927823002" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:29Z" user="Per" uid="2690" lat="59.9704144" lon="13.4077658"/>
   <node id="2927823007" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:30Z" user="Per" uid="2690" lat="59.9685995" lon="13.4034528"/>
   <node id="2927823010" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:30Z" user="Per" uid="2690" lat="59.9700063" lon="13.4083022"/>
   <node id="2927823011" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:30Z" user="Per" uid="2690" lat="59.9691579" lon="13.4102763"/>
   <node id="2927823014" visible="true" version="1" changeset="23082919" timestamp="2014-06-22T18:08:30Z" user="Per" uid="2690" lat="59.9672034" lon="13.4131088"/>
   <node id="3383532467" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:36Z" user="eoosterhof" uid="745198" lat="59.9680664" lon="13.3943931"/>
   <node id="3383532469" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:36Z" user="eoosterhof" uid="745198" lat="59.9677066" lon="13.3926121"/>
   <node id="3383532478" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:36Z" user="eoosterhof" uid="745198" lat="59.9677764" lon="13.3927516"/>
   <node id="3383532482" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:36Z" user="eoosterhof" uid="745198" lat="59.9679214" lon="13.3939854"/>
   <node id="3383533193" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:36Z" user="eoosterhof" uid="745198" lat="59.9678301" lon="13.3931486"/>
   <node id="3383533233" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:37Z" user="eoosterhof" uid="745198" lat="59.9678785" lon="13.3935777"/>
   <node id="3383533261" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:37Z" user="eoosterhof" uid="745198" lat="59.9676959" lon="13.3929984"/>
   <node id="3383533263" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:37Z" user="eoosterhof" uid="745198" lat="59.9675992" lon="13.3929125"/>
   <node id="3383533265" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:37Z" user="eoosterhof" uid="745198" lat="59.9675563" lon="13.3927838"/>
   <node id="3383533269" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:37Z" user="eoosterhof" uid="745198" lat="59.9675617" lon="13.3926336"/>
   <node id="3383533270" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:38Z" user="eoosterhof" uid="745198" lat="59.9676261" lon="13.3925585"/>
   <node id="3383533285" visible="true" version="1" changeset="29253243" timestamp="2015-03-04T20:51:38Z" user="eoosterhof" uid="745198" lat="59.9682883" lon="13.3948726"/>
   <node id="3680872680" visible="true" version="1" changeset="33103478" timestamp="2015-08-04T16:32:38Z" user="eoosterhof" uid="745198" lat="59.9661098" lon="13.3827553">
    <tag k="ele" v="396"/>
    <tag k="name" v="Loggolvberg"/>
    <tag k="natural" v="peak"/>
   </node>
   <way id="120653071" visible="true" version="3" changeset="24022043" timestamp="2014-07-08T11:02:33Z" user="Essin" uid="438299">
    <nd ref="1352343811"/>
    <nd ref="1352343814"/>
    <nd ref="1352343816"/>
    <nd ref="1352343820"/>
    <nd ref="1352343830"/>
    <nd ref="1352343834"/>
    <nd ref="1352343836"/>
    <nd ref="1352343838"/>
    <nd ref="1352343842"/>
    <nd ref="1352343848"/>
    <nd ref="1352343853"/>
    <nd ref="1352343858"/>
    <nd ref="1352343859"/>
    <nd ref="1352343862"/>
    <nd ref="1352343865"/>
    <nd ref="1352343872"/>
    <nd ref="1352343879"/>
    <nd ref="1352343886"/>
    <nd ref="1352343888"/>
    <nd ref="1352343889"/>
    <nd ref="1352343893"/>
    <nd ref="1352343896"/>
    <nd ref="1352343899"/>
    <nd ref="1352343900"/>
    <nd ref="1352343901"/>
    <nd ref="1352343904"/>
    <nd ref="1352343910"/>
    <nd ref="1352343912"/>
    <nd ref="1352343914"/>
    <nd ref="1352343913"/>
    <nd ref="1352343911"/>
    <nd ref="1352343909"/>
    <nd ref="1352343907"/>
    <nd ref="1352343903"/>
    <nd ref="1352343902"/>
    <nd ref="1352343905"/>
    <nd ref="1352343906"/>
    <nd ref="1352343908"/>
    <nd ref="1352343909"/>
    <tag k="highway" v="track"/>
    <tag k="source" v="Bing"/>
   </way>
   <way id="289235525" visible="true" version="2" changeset="29253243" timestamp="2015-03-04T20:51:45Z" user="eoosterhof" uid="745198">
    <nd ref="3383533193"/>
    <nd ref="3383533261"/>
    <nd ref="3383533263"/>
    <nd ref="3383533265"/>
    <nd ref="3383533269"/>
    <nd ref="3383533270"/>
    <nd ref="3383532469"/>
    <nd ref="3383532478"/>
    <nd ref="3383533193"/>
    <nd ref="3383533233"/>
    <nd ref="3383532482"/>
    <nd ref="3383532467"/>
    <nd ref="3383533285"/>
    <nd ref="2927822761"/>
    <nd ref="2927822707"/>
    <nd ref="2927821049"/>
    <nd ref="2927822763"/>
    <nd ref="2927821048"/>
    <nd ref="2927821067"/>
    <nd ref="2927822760"/>
    <nd ref="2927821027"/>
    <nd ref="2927821068"/>
    <nd ref="2927821046"/>
    <nd ref="2927821069"/>
    <nd ref="2927822719"/>
    <nd ref="2927821064"/>
    <nd ref="2927822779"/>
    <nd ref="2927823007"/>
    <nd ref="2927822717"/>
    <nd ref="2927821057"/>
    <nd ref="2927821090"/>
    <nd ref="2927822723"/>
    <nd ref="2927821036"/>
    <nd ref="2927822727"/>
    <nd ref="2927821100"/>
    <nd ref="2927823002"/>
    <nd ref="2927822800"/>
    <nd ref="2927822752"/>
    <nd ref="2927823010"/>
    <nd ref="2927821052"/>
    <nd ref="2927821029"/>
    <nd ref="2927821088"/>
    <nd ref="2927823011"/>
    <nd ref="2927822716"/>
    <nd ref="2927822753"/>
    <nd ref="2927821018"/>
    <nd ref="2927822776"/>
    <nd ref="2927823014"/>
    <nd ref="2927821078"/>
    <nd ref="2927822793"/>
    <nd ref="2927821060"/>
    <nd ref="2927822725"/>
    <nd ref="2927822785"/>
    <nd ref="2927821066"/>
    <nd ref="2927821079"/>
    <nd ref="2927821092"/>
    <nd ref="2927822781"/>
    <nd ref="2927822772"/>
    <nd ref="2927821019"/>
    <nd ref="2927822765"/>
    <nd ref="2927822794"/>
    <nd ref="2927822747"/>
    <nd ref="2927822703"/>
    <nd ref="2927822724"/>
    <nd ref="2927822768"/>
    <nd ref="2927822714"/>
    <nd ref="2927822759"/>
    <tag k="highway" v="track"/>
   </way>
  </osm>`