<script>
    export let data 

    console.log(data)

    const name = prettyName(data.name)

    function prettyName(name) {
        return name
                .replace(/-/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
    } 
</script>

<main>
    <h1><em>Issues</em> {name}</h1>

    <ul>
        {#each data.forks.nodes as fork}
            <li>
                <a href="{fork.owner.url}" class="owner"><img src="{fork.owner.avatarUrl}" alt="Avatar of {fork.owner.login}" width="50" height="50"><strong>{fork.owner.login}</strong></a>

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

<aside>
    <h2>Peer reviews</h2>

    <p>These issues originate from <a href=""> peer reviews</a> between students of the <a href="https://everythingweb.org/">Minor Web Design & Development</a> and are based on the minor's <a href="https://github.com/cmda-minor-web/best-practices/">best practices</a>. </p>
</aside>


<style>
    main {
        background-color: rgba(0,0,0,.1);
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
        border-bottom:1px dashed var(--secondary)
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
        color: var(--light);
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

    aside {
        padding:.5rem;
        background-color: var(--quartiary);
        color:var(--primary);
        color:var(--light);
        margin-top: -1rem;
    }

</style>