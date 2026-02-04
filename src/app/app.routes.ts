import { Routes } from '@angular/router';
import { Forms } from './component/forms/forms';
import { Reactivecompoent } from './component/forms/Reactiveforms/reactivecompoent/reactivecompoent';
import { Tablecomponent } from './component/Table/tablecomponent/tablecomponent';
import { canactivateGuard } from './component/guard/canactivate-guard';
import { canDeactivateGuard } from './component/guard/can-deactivate-guard';
import { resolveResolver } from './component/guard/resolve-resolver';
import { Reactiveoperators } from './component/rxjs/reactiveoperators/reactiveoperators';
import { Statec } from './component/ngrx/statec/statec';

export const routes: Routes = [
    {path : '' ,component :Forms},
    {path : 'reactive',component : Reactivecompoent,resolve : {
        resolvedata :resolveResolver
    }},
    {path : 'table',component:Tablecomponent}
    ,{path : 'rxjs',component :Reactiveoperators},{
        path :"state",component :Statec
    }
];
