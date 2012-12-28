// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Anatomy.find().count() === 0) {
        var data = [
            {name: "abdominalArteries",     image: 'images/grays.anatomy.thumbnails/abdominalArteries.png'},
            {name: "abdominalArteriesAndVeins",     image: 'images/grays.anatomy.thumbnails/abdominalArteriesAndVeins.png'},
            {name: "abdominalOverview",     image: 'images/grays.anatomy.thumbnails/abdominalOverview.png'},
            {name: "arteresAndVeinsOfUterus",     image: 'images/grays.anatomy.thumbnails/arteresAndVeinsOfUterus.png'},
            {name: "arteriesAndVeinsOfNeck",     image: 'images/grays.anatomy.thumbnails/arteriesAndVeinsOfNeck.png'},
            {name: "arteriesAndVeinsOfUpperExtremities",     image: 'images/grays.anatomy.thumbnails/arteriesAndVeinsOfUpperExtremities.png'},
            {name: "arteriesAndViensOfLowerExtremities",     image: 'images/grays.anatomy.thumbnails/arteriesAndViensOfLowerExtremities.png'},
            {name: "arteriesOfLowerExtremities1",     image: 'images/grays.anatomy.thumbnails/arteriesOfLowerExtremities1.png'},
            {name: "arteriesOfLowerExtremities2",     image: 'images/grays.anatomy.thumbnails/arteriesOfLowerExtremities2.png'},
            {name: "arteriesOfTheColon",     image: 'images/grays.anatomy.thumbnails/arteriesOfTheColon.png'},
            {name: "arteriesOfTheHead",     image: 'images/grays.anatomy.thumbnails/arteriesOfTheHead.png'},
            {name: "arteriesOfTheStomach",     image: 'images/grays.anatomy.thumbnails/arteriesOfTheStomach.png'},
            {name: "arteriesOfUpperExtremities2",     image: 'images/grays.anatomy.thumbnails/arteriesOfUpperExtremities2.png'},
            {name: "baseOfSkull",     image: 'images/grays.anatomy.thumbnails/baseOfSkull.png'},
            {name: "bloodcells",     image: 'images/grays.anatomy.thumbnails/bloodcells.png'},
            {name: "boneGrowth",     image: 'images/grays.anatomy.thumbnails/boneGrowth.png'},
            {name: "brain1",     image: 'images/grays.anatomy.thumbnails/brain1.png'},
            {name: "brain2",     image: 'images/grays.anatomy.thumbnails/brain2.png'},
            {name: "brain3",     image: 'images/grays.anatomy.thumbnails/brain3.png'},
            {name: "brain4",     image: 'images/grays.anatomy.thumbnails/brain4.png'},
            {name: "brain5",     image: 'images/grays.anatomy.thumbnails/brain5.png'},
            {name: "bridgeOfNose",     image: 'images/grays.anatomy.thumbnails/bridgeOfNose.png'},
            {name: "cardiac-system",     image: 'images/grays.anatomy.thumbnails/cardiac-system.png'},
            {name: "cerabelloCortex1",     image: 'images/grays.anatomy.thumbnails/cerabelloCortex1.png'},
            {name: "chestArteries",     image: 'images/grays.anatomy.thumbnails/chestArteries.png'},
            {name: "circleOfWillis",     image: 'images/grays.anatomy.thumbnails/circleOfWillis.png'},
            {name: "dental",     image: 'images/grays.anatomy.thumbnails/dental.png'},
            {name: "digestiveGlands",     image: 'images/grays.anatomy.thumbnails/digestiveGlands.png'},
            {name: "digestiveSystemArteriesAndVeins",     image: 'images/grays.anatomy.thumbnails/digestiveSystemArteriesAndVeins.png'},
            {name: "digestiveTrack",     image: 'images/grays.anatomy.thumbnails/digestiveTrack.png'},
            {name: "ear1",     image: 'images/grays.anatomy.thumbnails/ear1.png'},
            {name: "ear2",     image: 'images/grays.anatomy.thumbnails/ear2.png'},
            {name: "ear3",     image: 'images/grays.anatomy.thumbnails/ear3.png'},
            {name: "ear4",     image: 'images/grays.anatomy.thumbnails/ear4.png'},
            {name: "earCanalBones",     image: 'images/grays.anatomy.thumbnails/earCanalBones.jpg'},
            {name: "extremetesCartilidge",     image: 'images/grays.anatomy.thumbnails/extremetesCartilidge.png'},
            {name: "eye1",     image: 'images/grays.anatomy.thumbnails/eye1.png'},
            {name: "eye2",     image: 'images/grays.anatomy.thumbnails/eye2.png'},
            {name: "eye3",     image: 'images/grays.anatomy.thumbnails/eye3.png'},
            {name: "facialOpticArteriesAndVeins",     image: 'images/grays.anatomy.thumbnails/facialOpticArteriesAndVeins.png'},
            {name: "feet",     image: 'images/grays.anatomy.thumbnails/feet.png'},
            {name: "femaleSexualOrgans",     image: 'images/grays.anatomy.thumbnails/femaleSexualOrgans.png'},
            {name: "femoralStressAngles",     image: 'images/grays.anatomy.thumbnails/femoralStressAngles.png'},
            {name: "femoralVeinsAndArteries",     image: 'images/grays.anatomy.thumbnails/femoralVeinsAndArteries.png'},
            {name: "foramenMagnum",     image: 'images/grays.anatomy.thumbnails/foramenMagnum.png'},
            {name: "fornix",     image: 'images/grays.anatomy.thumbnails/fornix.png'},
            {name: "gastricEmbryology",     image: 'images/grays.anatomy.thumbnails/gastricEmbryology.png'},
            {name: "generalGlandsOfExtremities",     image: 'images/grays.anatomy.thumbnails/generalGlandsOfExtremities.png'},
            {name: "hands",     image: 'images/grays.anatomy.thumbnails/hands.png'},
            {name: "headNeckMuscles",     image: 'images/grays.anatomy.thumbnails/headNeckMuscles.png'},
            {name: "heart1",     image: 'images/grays.anatomy.thumbnails/heart1.png'},
            {name: "heart2",     image: 'images/grays.anatomy.thumbnails/heart2.png'},
            {name: "hipJoint",     image: 'images/grays.anatomy.thumbnails/hipJoint.png'},
            {name: "hypothalmus",     image: 'images/grays.anatomy.thumbnails/hypothalmus.png'},
            {name: "kidneys",     image: 'images/grays.anatomy.thumbnails/kidneys.png'},
            {name: "knee",     image: 'images/grays.anatomy.thumbnails/knee.png'},
            {name: "larynx1",     image: 'images/grays.anatomy.thumbnails/larynx1.png'},
            {name: "larynx2",     image: 'images/grays.anatomy.thumbnails/larynx2.png'},
            {name: "lateralFeet",     image: 'images/grays.anatomy.thumbnails/lateralFeet.png'},
            {name: "legMuscles",     image: 'images/grays.anatomy.thumbnails/legMuscles.png'},
            {name: "liver",     image: 'images/grays.anatomy.thumbnails/liver.png'},
            {name: "lowerExtremityBones",     image: 'images/grays.anatomy.thumbnails/lowerExtremityBones.png'},
            {name: "lungs1",     image: 'images/grays.anatomy.thumbnails/lungs1.png'},
            {name: "lungs2",     image: 'images/grays.anatomy.thumbnails/lungs2.png'},
            {name: "lungs3",     image: 'images/grays.anatomy.thumbnails/lungs3.png'},
            {name: "lymphNodesOfTheHead",     image: 'images/grays.anatomy.thumbnails/lymphNodesOfTheHead.png'},
            {name: "maleSexualOrgans",     image: 'images/grays.anatomy.thumbnails/maleSexualOrgans.png'},
            {name: "mandible",     image: 'images/grays.anatomy.thumbnails/mandible.jpg'},
            {name: "mandibleLigiments",     image: 'images/grays.anatomy.thumbnails/mandibleLigiments.png'},
            {name: "maxillaryFaceBones",     image: 'images/grays.anatomy.thumbnails/maxillaryFaceBones.png'},
            {name: "medullaOblongata1",     image: 'images/grays.anatomy.thumbnails/medullaOblongata1.png'},
            {name: "medullaOblongata2",     image: 'images/grays.anatomy.thumbnails/medullaOblongata2.png'},
            {name: "musclesOfLowerLeg",     image: 'images/grays.anatomy.thumbnails/musclesOfLowerLeg.png'},
            {name: "musclesOfTheHand",     image: 'images/grays.anatomy.thumbnails/musclesOfTheHand.png'},
            {name: "nasalFacialNerves",     image: 'images/grays.anatomy.thumbnails/nasalFacialNerves.png'},
            {name: "neckArteries",     image: 'images/grays.anatomy.thumbnails/neckArteries.png'},
            {name: "neckLigiments",     image: 'images/grays.anatomy.thumbnails/neckLigiments.png'},
            {name: "neckVeinsAndArteries",     image: 'images/grays.anatomy.thumbnails/neckVeinsAndArteries.png'},
            {name: "nerveDiagram1",     image: 'images/grays.anatomy.thumbnails/nerveDiagram1.png'},
            {name: "nerveDiagram2",     image: 'images/grays.anatomy.thumbnails/nerveDiagram2.png'},
            {name: "nerveOverview",     image: 'images/grays.anatomy.thumbnails/nerveOverview.png'},
            {name: "nervesOfTheFaceAndMandible",     image: 'images/grays.anatomy.thumbnails/nervesOfTheFaceAndMandible.png'},
            {name: "nervesOfTheGut",     image: 'images/grays.anatomy.thumbnails/nervesOfTheGut.png'},
            {name: "nervesOfTheLowerExtremities",     image: 'images/grays.anatomy.thumbnails/nervesOfTheLowerExtremities.png'},
            {name: "nervesOfTheLowerExtremities2",     image: 'images/grays.anatomy.thumbnails/nervesOfTheLowerExtremities2.png'},
            {name: "nervesOfTheNeck2",     image: 'images/grays.anatomy.thumbnails/nervesOfTheNeck2.png'},
            {name: "nervesOfThePelvis",     image: 'images/grays.anatomy.thumbnails/nervesOfThePelvis.png'},
            {name: "nervesOfTheShoulder",     image: 'images/grays.anatomy.thumbnails/nervesOfTheShoulder.png'},
            {name: "nervesOfTheTorso",     image: 'images/grays.anatomy.thumbnails/nervesOfTheTorso.png'},
            {name: "nervesOfTheUpperExtremities",     image: 'images/grays.anatomy.thumbnails/nervesOfTheUpperExtremities.png'},
            {name: "nose",     image: 'images/grays.anatomy.thumbnails/nose.png'},
            {name: "noseBones",     image: 'images/grays.anatomy.thumbnails/noseBones.png'},
            {name: "opticRecess",     image: 'images/grays.anatomy.thumbnails/opticRecess.png'},
            {name: "opticSystem",     image: 'images/grays.anatomy.thumbnails/opticSystem.png'},
            {name: "orbits",     image: 'images/grays.anatomy.thumbnails/orbits.png'},
            {name: "parotidGlandAndDucts",     image: 'images/grays.anatomy.thumbnails/parotidGlandAndDucts.png'},
            {name: "pelvicBone",     image: 'images/grays.anatomy.thumbnails/pelvicBone.png'},
            {name: "pelvicGlands",     image: 'images/grays.anatomy.thumbnails/pelvicGlands.png'},
            {name: "pharynx",     image: 'images/grays.anatomy.thumbnails/pharynx.png'},
            {name: "prostate",     image: 'images/grays.anatomy.thumbnails/prostate.png'},
            {name: "rectum",     image: 'images/grays.anatomy.thumbnails/rectum.png'},
            {name: "rib",     image: 'images/grays.anatomy.thumbnails/rib.png'},
            {name: "ribcage",     image: 'images/grays.anatomy.thumbnails/ribcage.png'},
            {name: "ribLigiments",     image: 'images/grays.anatomy.thumbnails/ribLigiments.png'},
            {name: "ribMuscles",     image: 'images/grays.anatomy.thumbnails/ribMuscles.png'},
            {name: "ribsLungs",     image: 'images/grays.anatomy.thumbnails/ribsLungs.png'},
            {name: "scapulaeClavical",     image: 'images/grays.anatomy.thumbnails/scapulaeClavical.png'},
            {name: "sexMuscles",     image: 'images/grays.anatomy.thumbnails/sexMuscles.png'},
            {name: "sexualDevelopment",     image: 'images/grays.anatomy.thumbnails/sexualDevelopment.png'},
            {name: "sexualDevelopment2",     image: 'images/grays.anatomy.thumbnails/sexualDevelopment2.png'},
            {name: "skin",     image: 'images/grays.anatomy.thumbnails/skin.png'},
            {name: "skull",     image: 'images/grays.anatomy.thumbnails/skull.jpg'},
            {name: "skullPlates",     image: 'images/grays.anatomy.thumbnails/skullPlates.png'},
            {name: "spinalNerves1",     image: 'images/grays.anatomy.thumbnails/spinalNerves1.png'},
            {name: "spinalNerves2",     image: 'images/grays.anatomy.thumbnails/spinalNerves2.png'},
            {name: "sternum",     image: 'images/grays.anatomy.thumbnails/sternum.png'},
            {name: "stomachAndSmallIntestines",     image: 'images/grays.anatomy.thumbnails/stomachAndSmallIntestines.png'},
            {name: "tailbone",     image: 'images/grays.anatomy.thumbnails/tailbone.png'},
            {name: "testes",     image: 'images/grays.anatomy.thumbnails/testes.png'},
            {name: "thyroid",     image: 'images/grays.anatomy.thumbnails/thyroid.png'},
            {name: "tongue2",     image: 'images/grays.anatomy.thumbnails/tongue2.png'},
            {name: "torsoMuscles",     image: 'images/grays.anatomy.thumbnails/torsoMuscles.png'},
            {name: "torsoOverview",     image: 'images/grays.anatomy.thumbnails/torsoOverview.png'},
            {name: "tosoGlands",     image: 'images/grays.anatomy.thumbnails/tosoGlands.png'},
            {name: "tounge",     image: 'images/grays.anatomy.thumbnails/tounge.png'},
            {name: "tympanicDevelopment",     image: 'images/grays.anatomy.thumbnails/tympanicDevelopment.png'},
            {name: "upperArmMuscles",     image: 'images/grays.anatomy.thumbnails/upperArmMuscles.png'},
            {name: "upperExtremityBones",     image: 'images/grays.anatomy.thumbnails/upperExtremityBones.png'},
            {name: "veinsOfHead",     image: 'images/grays.anatomy.thumbnails/veinsOfHead.png'},
            {name: "veinsOfTheNeck",     image: 'images/grays.anatomy.thumbnails/veinsOfTheNeck.png'},
            {name: "vertebrae",     image: 'images/grays.anatomy.thumbnails/vertebrae.png'},
            {name: "vertebralVeins",     image: 'images/grays.anatomy.thumbnails/vertebralVeins.png'},
            {name: "vocalCords",     image: 'images/grays.anatomy.thumbnails/vocalCords.png'}
        ];

        for (var i = 0; i < data.length; i++) {
            Anatomy.insert({
                name:   data[i].name,
                image:  data[i].image
            });
        }
    }


      if (Lists.find().count() === 0) {
        var data = [
          {name: "Registered - Insurance",
           contents: [
             ["Coverage of nanoparticle therapy?", "nanoparticles", "coverage"],
             ["Covered treatment options for prostate cancer?", "coverage", "prostate cancer"],
           ]
          },
          {name: "Registered - Hospital",
           contents: [
             ["Contraindications of tamoxifen?", "drugs"],
             ["Clinical protocol in case of tamoxifen shortage?", "protocols", "drugs", "supply chain"],
             ]
          },
          {name: "Public",
           contents: [
             ["2nd opinion on breast lump?", "breast cancer", "second opinion"],
             ["Side effects of Nolvadex?", "drugs", "side effects"],
             ["Is 5 years without an exam too long?", "exams", "general"],
             ["Why can't they make chemo drugs that don't make you naseated?", "chemotherapy", "drugs", "side effects"],
           ]
          }
        ];

        var timestamp = (new Date()).getTime();
        for (var i = 0; i < data.length; i++) {
          var list_id = Lists.insert({name: data[i].name});
          for (var j = 0; j < data[i].contents.length; j++) {
            var info = data[i].contents[j];
            Todos.insert({list_id: list_id,
                          text: info[0],
                          timestamp: timestamp,
                          tags: info.slice(1)});
            timestamp += 1; // ensure unique timestamp.
          }
        }
      }
});
