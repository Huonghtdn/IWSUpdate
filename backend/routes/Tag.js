const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const connection = require('../config/Connection')
// parse requests of content-type - application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
router.use(bodyParser.json())
const listTag ="select * from tag";
const findTagById = "select * from tag where id=?";
const findNewsId = "select * from tag_has_news where tag_id=?";
const findNewsByTag =" select news.title,news.short_intro,news.image, tag_has_news.news_id, tag_has_news.tag_id from tag inner join tag_has_news on tag.id = tag_has_news.tag_id inner join news on news.id = tag_has_news.news_id where tag.id = ?;"
router.get('/',(req,res)=>connection.connect(function(){
    connection.query(listTag,function(err,result,fields){
        if (err) throw err;
    const data = JSON.parse(JSON.stringify(result))
    data.forEach(element=>element.links = `/tags/${element.id}`);
      const value = {
        data:data,
        limit:10,
        pagination: {
          first_page: "/tags?page=1",
          last_page: "/tags?page=1",
          comment:1
         }
         

      }

        
        res.status(200).json(value);
        return;
    })
}))
router.get('/:id',(req,res)=>connection.connect(function(){
  const id = req.params.id;
  connection.query(findTagById,[id],function(err,result,fields){
    if(err) throw err;
    const data = JSON.parse(JSON.stringify(result))
    res.status(200).json(data);
        return;
  })
}))

router.get('/:id/news',(req,res)=>connection.connect(function(){
    const id = req.params.id;
    connection.query(findNewsByTag,[id],function(err,result,fields){
        if(err) throw err;
        const data = JSON.parse(JSON.stringify(result))
  
      const value = {
        data:data,
        limit:10,
        pagination: {
          first_page: "/tags?page=1",
          last_page: "/tags?page=1",
          comment:1
         }
         

      }

        
        res.status(200).json(value);
        return;
    })
}))
module.exports = router;