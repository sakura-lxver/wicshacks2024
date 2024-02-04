import React , {useState} from 'react';
import '../css/DrugSearch.css';
import "bootstrap/dist/css/bootstrap.min.css";
function DrugSearch() {

    return(
        <>
            <div className="drug-background">
                <div className="search-bar">
                    <div class="input-group">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DrugSearch;