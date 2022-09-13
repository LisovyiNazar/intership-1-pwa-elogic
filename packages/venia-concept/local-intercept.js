module.exports = (targets) => {
    targets.of('@magento/venia-ui').routes.tap((routes) => {
        routes.push({
            name: 'Comments Page',
            pattern: '/comments',
            path: require.resolve('./src/components/CommentsPage'),
        });
        return routes;
    });
};