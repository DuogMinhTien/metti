# Pure Project: React App Enviroment

## Setup Enviroment
---
Gitlab project: https://gitlab.com/kiddyly/reactjspureprojectsetup

## Library
---
1. UI Library: Ant Design (https://ant.design/components/overview/)

2. Router: React Router Dom (https://reactrouter.com/web/guides/quick-start)

## File structure
---

```
src
|__ assets
|  |__ images
|  |__ styles (global styles) 
|
|__ components (shared components)
|
|__ features
  |__ [Feature]
    |__ components
    |  |__ (Feature's Component (reusable component))
    |
    |__ screen
    |  |__ MainPage
    |  |__ AddEditPage
    |
    |__ hooks
    |  |__[featureHook.js]
    |
    |__services
    |  |__[serviceFeature.js]
    |
    |__ index.js (for router)
```

## Router structure

* Lazy load component technic
* Load by feature

* Demo
```typescript
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/[feature]" component={Feature} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
```

## Deploy to Firebase :rocket:
---
Run the following command to create a build directory with a production build of the app
```
  npm run build
```
### Configuring Firebase
```
  npm install -g firebase-tools
```
```
  firebase login
```
```
  firebase init
```
### Deploy to Firebase
```
  firebase deploy
```



