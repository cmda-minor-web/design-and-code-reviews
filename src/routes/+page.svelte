<script>
    export let data 
</script>

<main>
    <h1>{data.issues.repository.name} <em>Issues</em></h1>

    <ul>
        {#each data.issues.repository.forks.nodes as fork}

            <li>
                <a href="{fork.owner.url}">{fork.owner.login}</a>

                <ul> 
                    {#each fork.issues.nodes as issue}
                        <li>    
                            <a href="{issue.url}">
                                <span>#{issue.number}</span>
                                <span>{issue.title}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</main>


<style>
    h1 {
        background-color: rgba(218, 180, 133, .1);
        color:var(--primary);
        padding:.5rem;
        margin:0 0 2rem;
    }
    h1 em {
        color: var(--secondary);
        text-shadow:none;
        font-style: normal;
    }
    a {
        color:var(--secondary);
        transition:.15s;
        transform-origin: center center;
    }
    a:hover {
        text-decoration: none;
    }
    ul {
        list-style:none;
        padding:0 .5rem;
    }
    li {
        display:flex;
        flex-direction:column;
        margin: 1rem 0;
        padding-bottom:1rem;
        border-bottom:3px dashed rgba(218, 180, 133, .1)
    }

    ul ul {
        display:flex;
        flex-direction: row;
        gap: .5rem;
        margin: 1rem 0;
        padding:0;
        flex-wrap:wrap;
    }

    ul ul li {
        margin: 0;
        border-bottom:none;
        padding-bottom: 0;
    }

    ul ul li a {
        border-radius:.5rem;
        background-color:var(--tertiary);
        padding:.25rem;
        margin:0;
        color: var(--primary);
        text-decoration:none;
        display:flex;
        align-items:center;
        gap:.25rem;
    }


    ul ul li a:hover {
        transform: scale(1.03);
        background-color: var(--secondary);
    }

    a span:first-of-type {
        border-radius:50%;
        background-color: var(--secondary);
        padding:.25rem;
    }

    svg {
        flex-shrink: 0;
    }

</style>