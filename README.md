# :exclamation:Updated Readme:exclamation:
The following is a quick guide on how to install, compile, run & navigate my application created for the frontend technical assessment.

## Installation & Compilation 
Download this github repository and run the following commands inside the downloaded folder.

```
yarn install
yarn start
```
After running those commands application should load at `localhost:8080/#/` :tada:

## Navigation :zap:

### Activity Feed & Activity Details
Activity details is the homepage of this app. Here you can see all the non-archived calls. You can click on the green icon on the right side to get more details about a specific call. 

### How to archive an Activity
In order to properly archive an activity, navigate to that activity's details page by pressing the information icon. Then locate and press the archive button.

### How to reset all activities status
In the navbar press the settings icon and the locate and press the "Reset all calls" button.

## Features Implemented :whale2:
1. Custom react hook that gets details about all activies or a specific one using axios :white_check_mark:
2. Proper filtering and removing of archived calls :white_check_mark:
3. Ability to archive a specific call :white_check_mark:
4. Ability to reset the archived status for all calls :white_check_mark:
5. Error handling for bad url's, bad requests and unsuccesful requests :white_check_mark:
6. Providing user feedback based on success and failure of actions using Toastify :white_check_mark:
7. Dynammic loading of components and their contents based on the provided data :white_check_mark:


## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure...).

The app will have two different components:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call

Show us what you can do in 6 hours top :) Focus on design, development - all aspects!

**Bonus:** the final user should be able to archive a call. The call will no longer be displayed on the Activity Feed. Please code that only if you have extra time.


To give you an idea, here what our app looks like:


![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here:

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://aircall-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

- **GET** - https://aircall-job.herokuapp.com/activities: get calls to display in the Activity Feed
- **GET** - https://aircall-job.herokuapp.com/activities/:id: retrieve a specific call details
- **POST** - https://aircall-job.herokuapp.com/activities/:id: update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **GET** - https://aircall-job.herokuapp.com/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.


