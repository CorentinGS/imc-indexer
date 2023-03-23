/** @jsxImportSource react */
import {JSXElement} from "@babel/types"
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch"
import {
    Highlight, Hits, InfiniteHits, InstantSearch, SearchBox, useHits
} from "react-instantsearch-hooks-web"
import {Fragment} from "react";

export default function Search() {
    const searchClient = instantMeiliSearch("localhost:7700",)

    const Hit = ({hit}: { hit: JSXElement }) => {
        {
            /*// @ts-ignore */
        }
        const chess = {
            name: hit.name, url: hit.url,
        }
        return (<>
                <div
                    className="flex w-full scale-100 transform flex-col justify-center transition-all duration-300 hover:scale-95 hover:cursor-pointer">
                    <a className="w-full text-2xl font-bold truncate py-1" href={chess.url}>{chess.name}</a>
                </div>
            </>)
    }

    function CustomHits(props: any) {
        const {hits, results, sendEvent} = useHits(props);

        return <>
            <div className="w-full gap-12 mt-5">
                {hits.length ? hits.map((hit, index) => {
                    return (<Hit key={index} hit={hit}/>

                    );
                }) : null}
            </div>
        </>;
    }


    return (<>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-screen">
                    <h1 className="text-5xl font-bold my-2">Search chess content</h1>
                    <InstantSearch indexName="chess" searchClient={searchClient}>
                        <SearchBox autoFocus={true}
                                   classNames={{
                                       root: "form-control",
                                       form: "input-group",
                                       submit: "hidden",
                                       input: "input input-bordered w-full input-secondary",
                                       loadingIndicator: "hidden",
                                       reset: "hidden",
                                   }}/>
                        {/*// @ts-ignore */}
                        <InfiniteHits hitComponent={Hit}/>
                    </InstantSearch>
                </div>
            </div>
        </div>

    </>);

}
