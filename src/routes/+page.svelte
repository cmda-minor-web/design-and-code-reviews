<script>
    export let data 

    const forks = Object.keys(data).map((key) => data[key])
    
    function prettyName(name) {
        return name
                .replace(/-/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
    } 
</script>

<main>
    <h1>Issues <em>Web App From Scratch</em></h1>
    {#each forks as fork}

    <article>
        <h2><a href="{fork.ownerUrl}" class="owner"><img src="{fork.avatar}" alt="Avatar of {fork.owner}" width="50" height="50"><strong>{fork.owner}</strong></a></h2>
        <div>
            <h3>Received</h3>
            {#if fork.receivedIssues.length < 1}
                <p>No issues received</p>
            {/if}
            <ul>
                {#each fork.receivedIssues as issue}
                    <li>
                        <a href="{issue.url}">
                            <span>#{issue.number}</span>
                            <span>{issue.title}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        
        <div>
            <h3>Submitted</h3>
            {#if fork.submittedIssues.length < 1}
                <p>No issues submitted</p>
            {/if}
            <ul>
                {#each fork.submittedIssues as issue}
                    <li>
                        <a href="{issue.node.url}">
                            <span>#{issue.node.number}</span>
                            <span>{issue.node.title}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
        
    </article>
    {/each}
</main>

<aside>
    <h2>Peer reviews</h2>

    <p>These issues originate from <a href=""> peer reviews</a> between students of the <a href="https://everythingweb.org/">Minor Web Design & Development</a> and are based on the minor's <a href="https://github.com/cmda-minor-web/best-practices/">best practices</a>. </p>
</aside>


<style>
    main {
        background-color: rgba(0,0,0,.1);
    }
    article {
        padding:.5rem
    }
    h1 {
        background-color: var(--secondary);
        color:var(--primary);
        padding:.5rem;
        margin:0 0 2rem;
    }
    h1 em {
        color: var(--light);
        text-shadow:none;
        font-style: normal;
    }
    a {
        color:var(--light);
        transition:.15s;
        transform-origin: center center;
    }
    a:hover {
        text-decoration: none;
    }
    a img {
        border-radius: 50%;
    }
    a.owner {
        display:flex;
        gap: .5rem;
        align-items:flex-end;
    }
    a.owner strong {
        margin-bottom: 0.5rem;
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
    }

    ul {
        display:flex;
        flex-direction: row;
        gap: .5rem;
        margin: 1rem 0;
        padding:0;
        flex-wrap:wrap;
    }

    ul li {
        margin: 0;
        border-bottom:none;
        padding-bottom: 0;
    }

    ul li a {
        border-radius:.5rem;
        background-color:var(--tertiary);
        padding:.25rem;
        margin:0;
        color: var(--light);
        text-decoration:none;
        display:flex;
        align-items:center;
        gap:.25rem;
    }


    ul li a:hover {
        transform: scale(1.03);
        background-color: var(--secondary);
    }

    a span:first-of-type {
        border-radius:50%;
        background-color: var(--secondary);
        padding:.25rem;
    }

    aside {
        padding:.5rem;
        background-color: var(--primary);
        color:var(--primary);
        color:var(--light);
        margin-top: -1rem;
    }

    @media (min-width:45em) {
        main article {
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem
        }
        h2 {
            grid-column: 1 / -1;
        }
    }

</style>