function GifParser({ media }){
    
    // if (media){
    //     if(data.media_metadata) {
    //         //     for(m in data.media_metadata){
    //         //        switch(data.media_metadata[m]['t']) {
    //         //           case 'emoji':
    //         //           case 'sticker':
    //         //              //might be a gif, try that first
    //         //              data.body = data.body.replaceAll(`![gif](${m})`, `<img src="${data.media_metadata[m]['s']['gif']}" style="border:0;width:${data.media_metadata[m]['s']['x']}px;height:${data.media_metadata[m]['s']['y']}px;" />`);
    //         //              data.body = data.body.replaceAll(`![img](${m})`, `<img src="${data.media_metadata[m]['s']['u']}" style="border:0;width:${data.media_metadata[m]['s']['x']}px;height:${data.media_metadata[m]['s']['y']}px;" />`);
    //         //              break;
    //         //           case 'giphy':
    //         //              data.body = data.body.replaceAll(`![gif](${m})`,`<a href="${data.media_metadata[m]['ext']}" target="blank"><img src="${data.media_metadata[m]['s']['gif']}" style="border:0;width:${data.media_metadata[m]['s']['x']}px;height:${data.media_metadata[m]['s']['y']}px;" /></a>`);
    //         //              break;
    //         //           default: //uploaded photo
    //         //              data.body = data.body.replaceAll(data.media_metadata[m]['s']['u'], `<a href="${data.media_metadata[m]['s']['u']}" target="blank"><img src="${data.media_metadata[m]['p'][0]['u']}" style="border:0;width:${data.media_metadata[m]['p'][0]['x']}px;height:${data.media_metadata[m]['p'][0]['y']}px;" /></a>`);
    //         //              break;
    //         //        }
    //         //     }
    //         //  }
    // } 
    
};

export default GifParser;

// if(data.media_metadata) {
//     for(m in data.media_metadata){
//        switch(data.media_metadata[m]['t']) {
//           case 'emoji':
//           case 'sticker':
//              //might be a gif, try that first
//              data.body = data.body.replaceAll(`![gif](${m})`, `<img src="${data.media_metadata[m]['s']['gif']}" style="border:0;width:${data.media_metadata[m]['s']['x']}px;height:${data.media_metadata[m]['s']['y']}px;" />`);
//              data.body = data.body.replaceAll(`![img](${m})`, `<img src="${data.media_metadata[m]['s']['u']}" style="border:0;width:${data.media_metadata[m]['s']['x']}px;height:${data.media_metadata[m]['s']['y']}px;" />`);
//              break;
//           case 'giphy':
//              data.body = data.body.replaceAll(`![gif](${m})`,`<a href="${data.media_metadata[m]['ext']}" target="blank"><img src="${data.media_metadata[m]['s']['gif']}" style="border:0;width:${data.media_metadata[m]['s']['x']}px;height:${data.media_metadata[m]['s']['y']}px;" /></a>`);
//              break;
//           default: //uploaded photo
//              data.body = data.body.replaceAll(data.media_metadata[m]['s']['u'], `<a href="${data.media_metadata[m]['s']['u']}" target="blank"><img src="${data.media_metadata[m]['p'][0]['u']}" style="border:0;width:${data.media_metadata[m]['p'][0]['x']}px;height:${data.media_metadata[m]['p'][0]['y']}px;" /></a>`);
//              break;
//        }
//     }
//  }
//  data.body = data.body.replaceAll('\n','<br>');

//  //attempt to link reddit-formatted links
//  let re = new RegExp('\\[(.*?)\\]\\((.*?)\\)', "g");
//  data.body = data.body.replaceAll(re, '<a href="$2" target="blank">$1</a>');
//  //quick fix for internal reddit.com links missing the domain
//  data.body = data.body.replace('href="/', 'href="https://www.reddit.com/');

//  inner += `<div class="comment_body">${data.body}</div>`;
//  inner += `<div class="comment_link"><a href="https://www.reddit.com${data.permalink}?context=4" target="_${data.subreddit}">${date_created} on ${data.subreddit}</a></div>`;

//  if(is_parent) {
//     inner += '</div>';
//  }
//  content.innerHTML = inner;
//  return content;
