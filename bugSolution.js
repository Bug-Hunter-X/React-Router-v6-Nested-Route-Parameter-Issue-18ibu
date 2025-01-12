The solution requires restructuring the nested routes to avoid parameter conflicts.

**Corrected code:**
```javascript
import { useParams } from 'react-router-dom';

function ParentRoute() {
  return (
    <div>
      <ChildRoute />
    </div>
  );
}

function ChildRoute() {
  let { id } = useParams();
  return (
    <div>
      <h1>Child Route: {id}</h1>
    </div>
  );
}

// Route definition (in App.js or similar):
<Routes>
  <Route path="/parent/:id" element={<ParentRoute />}>
    <Route index element={<ChildRoute />} />
  </Route>
</Routes>
```
OR, if you need additional nested routes under `/parent/:id`, you can use an index route for the default child route:
```javascript
<Routes>
  <Route path="/parent/:id" element={<ParentRoute />}>
    <Route index element={<ChildRoute />} />
    <Route path="child-route" element={<AnotherChildRoute />} />
  </Route>
</Routes>
```
By using `index` element or defining distinct path segments within nested routes we avoid the parameter overriding. The `index` route will be rendered when no other route within the parent matches.