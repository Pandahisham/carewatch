

//Template.communityPageTemplate.events(okCancelEvents(
//    '#new-user',
//    {
//        ok: function (text, evt) {
//            console.log('ok called on new todo item');
//            var tag = Session.get('tag_filter');
//            console.log('tags: ' + tag);
//
////            users.insert({
////                text: text,
////                list_id: Session.get('list_id'),
////                done: false,
////                timestamp: (new Date()).getTime(),
////                tags: tag ? [tag] : []
////            });
//            console.log('text.length: ' + text.length);
//            if (text.length) {
//                console.log('text: ' + text);
//                console.log('list_id: ' + Session.get('list_id'));
//                console.log('owner: ' + Meteor.userId());
//
////                Meteor.call('createQuestion', {
////                    text: text,
////                    list_id: Session.get('list_id'),
////                    done: false,
////                    timestamp: (new Date()).getTime(),
////                    tags: tag ? [tag] : [],
////                    owner: Meteor.userId,
////                    tags: tag ? [tag] : [],
////                    public: 'public'
////                }, function (error, todo) {
////                    console.log('error: ' + error);
////                    console.log('todo: ' + todo);
////                });
//            } else {
//                Session.set("createError",
//                    "It needs a title and a description, or why bother?");
//            }
//
//            evt.target.value = '';
//        }
//    })
//);


//Template.players.isMemberOf = function (userRole) {
//    return this.userRole === userRole;
//};