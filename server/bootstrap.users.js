// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        log_event('no users in database!  adding some default users', LogLevel.Info);

        // crate our administrator
        var userId = Meteor.users.insert({
            emails: {
                address: 'admin@test.com'
            },
            profile: {
                name: 'Administrator',
                role: 'Administrator',
                avatar: '/userspace/defaults/caduceus-staff.jpg'
            }
        });
        Accounts.setPassword(userId, 'admin');
        log_event('Administrator account created: ' + userId, LogLevel.Info);

        // and a default physician
        var userId = Meteor.users.insert({
            emails: {
                address: 'house@test.com'
            },
            profile: {
                name: 'Gregory House, MD',
                role: 'Physician',
                avatar: '/userspace/defaults/staff_of_asclepius.jpg'
            }
        });
        Accounts.setPassword(userId, 'house');
        log_event('Administrator account created: ' + userId, LogLevel.Info);


        // now lets create some test patients
        var data = [
            {'address': "janedoe@test.com",
                profile: {
                    name: 'Jane Doe',
                    role: 'Patient',
                    avatar: '/userspace/defaults/rabbit_animal_pink_cute.png'
                }
            },
            {'address': "johndoe@test.com",
                profile: {
                    name: 'John Doe',
                    role: 'Stakeholder',
                    avatar: '/userspace/defaults/rabbit_animal_pink_cute.png'
                }
            }
        ];

        // and insert them into the database
        for (var i = 0; i < data.length; i++) {
            var userId = Meteor.users.insert({
                emails: {
                    address: data[i].address
                },
                profile: {
                    name: data[i].profile.name,
                    avatar: data[i].profile.avatar
                }
            });
            log_event('new user created: ' + userId, LogLevel.Info);

            // and assign them default passwords of 'password'
            Accounts.setPassword(userId, 'password');
        }



    }
});
